import { CACHE_MANAGER, ForbiddenException, Injectable, Inject } from "@nestjs/common"
import { PrismaService } from "../common/prisma/prisma.service"
import { AuthDto } from "./dto"
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import { User, Prisma } from ".prisma/client"
import svgCaptcha from "svg-captcha"
import { CaptchaDto } from "./dto/captcha.dto"
import { Cache } from "cache-manager"

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {
    this.prisma = prisma
    this.config = config
    this.jwt = jwt
  }

  /**
   * 注册
   * @param param0
   * @returns
   */
  async signup(dto: AuthDto): Promise<User> {
    try {
      //验证码比对
      const cacheAnswer = await this.cacheManager.get(dto.uniCode)
      if (cacheAnswer !== dto.answer) {
        this.cacheManager.del(dto.uniCode)
        throw new ForbiddenException("验证码错误")
      }
      const password: string = await argon.hash(dto.password)
      const user: User = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: password
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
  async signin({ password, username, uniCode, answer }: AuthDto): Promise<any> {
    //验证码比对
    const cacheAnswer = await this.cacheManager.get(uniCode)
    if (cacheAnswer !== answer) {
      this.cacheManager.del(uniCode)
      throw new ForbiddenException("验证码错误")
    } else {
      this.cacheManager.del(uniCode)
    }
    //用户是否存在
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        username: username
      }
    })
    if (!user) throw new ForbiddenException("用户名不存在或密码错误")
    //密码是否正确
    const pwMatches = await argon.verify(user.password, password)
    if (!pwMatches) throw new ForbiddenException("用户名不存在或密码错误")
    //生成token
    const payload: object = {
      sub: user.id,
      username: user.username
    }
    const token = await this.jwt.signAsync(payload, {
      secret: this.config.get("JWT_SECRET")
    })
    return {
      ...user,
      password: "",
      access_token: token
    }
  }
  /**
   * 验证码
   * @param dto
   * @returns
   */
  async captcha(dto: CaptchaDto): Promise<any> {
    let captcha: svgCaptcha.CaptchaObj
    if (Number(dto.type) == 0) {
      captcha = svgCaptcha.create({
        background: dto.background,
        size: Number(dto.size),
        ignoreChars: dto.ignoreChars,
        color: dto.color
      })
    } else {
      captcha = svgCaptcha.createMathExpr({
        background: dto.background,
        ignoreChars: dto.ignoreChars,
        color: dto.color
      })
    }
    const uniCode = `uni${new Date().getTime()}`
    const time = 60 * 5
    await this.cacheManager.set(uniCode, captcha.text, time)

    return {
      time,
      uniCode,
      data: captcha.data
    }
  }
}
