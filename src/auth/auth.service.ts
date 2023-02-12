import { Body, ForbiddenException, Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { User, Prisma } from "@prisma/client"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {
    this.prisma = prisma
    this.config = config
    this.jwt = jwt
  }

  /**
   * 注册
   * @param param0
   * @returns
   */
  async signup(@Body() { password, email }: AuthDto): Promise<User> {
    try {
      const hash: string = await argon.hash(<string>password)
      const user: User = <User>await this.prisma.user.create({
        data: {
          email: <string>email,
          hash: hash
        }
      })
      return Object.assign({
        hash: "****",
        user
      })
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
  async signin(@Body() { password, email }: AuthDto): Promise<object> {
    //用户是否存在
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if (!user) throw new ForbiddenException("Credentials incorrect")
    //密码是否正确
    const pwMatches = await argon.verify(user.hash, <string>password)
    if (!pwMatches) throw new ForbiddenException("Credentials incorrect")
    //生成token
    const payload: object = {
      sub: user.id,
      email: user.email
    }
    const token = await this.jwt.signAsync(payload, {
      secret: this.config.get("SESSION_SECRET")
    })
    return {
      access_token: token
    }
  }
}
