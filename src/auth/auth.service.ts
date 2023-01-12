import { Body, ForbiddenException, Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { User } from "@prisma/client"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}

  /**
   * 注册
   * @param param0
   * @returns
   */
  async signup(@Body() { password, email }: AuthDto) {
    try {
      const hash: string = await argon.hash(password)
      const user: User = await this.prisma.user.create({
        data: {
          email: email,
          hash: hash
        }
      })
      delete user.hash
      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException("Credentials taken")
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
  async signin(@Body() { password, email }: AuthDto): Promise<{ access_token: string }> {
    //用户是否存在
    const user: User = await this.prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if (!user) throw new ForbiddenException("Credentials incorrect")
    //密码是否正确
    const pwMatches = await argon.verify(user.hash, password)
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
