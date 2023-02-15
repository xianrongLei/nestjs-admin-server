import { ForbiddenException, Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { User, Prisma } from "@prisma/client"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}

  /**
   * 注册
   * @param param0
   * @returns
   */
  async signup({ password, email }: AuthDto): Promise<User> {
    try {
      const hash: string = await argon.hash(password)
      const user: User = await this.prisma.user.create({
        data: {
          email: email,
          hash: hash
        }
      })
      return user
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException("该邮箱已被注册!")
        }
      }
      throw error
    }
  }

  /**
   * 登录
   * @param param0
   * @returns
   */
  async signin({ password, email }: AuthDto): Promise<object> {
    //用户是否存在
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if (!user) throw new ForbiddenException("用户名不存在或密码错误！")
    //密码是否正确
    const pwMatches = await argon.verify(user.hash, password)
    if (!pwMatches) throw new ForbiddenException("用户名不存在或密码错误！")
    //生成token
    const payload: object = {
      sub: user.id,
      email: user.email
    }
    const token = await this.jwt.signAsync(payload, {
      secret: this.config.get("JWT_SECRET")
    })
    return {
      access_token: token
    }
  }
}
