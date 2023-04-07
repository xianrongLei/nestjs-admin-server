import { CACHE_MANAGER, ForbiddenException, Injectable, Inject } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User, Prisma } from ".prisma/client";
import svgCaptcha from "svg-captcha";
import { Cache } from "cache-manager";
import { Captcha, CreateCaptchaInput } from "@/types/graphql";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {
    this.prisma = prisma;
    this.config = config;
    this.jwt = jwt;
  }
  /**
   * 生成token
   * @param payload
   * @returns
   */
  async generateTokens(payload: Record<string, any>): Promise<Record<string, any>> {
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.config.get("jwt.secret")
    });
    const refreshToken = await this.jwt.signAsync(payload, { expiresIn: this.config.get("jwt.refExpiresIn") });
    return {
      access_token: accessToken,
      refresh_token: refreshToken
    };
  }

  /**
   * 注册
   * @param param0
   * @returns
   */
  async signup(): Promise<Record<string, any>> {
    // async signup(dto: AuthDto): Promise<Record<string, any>> {
    const dto: any = {};
    try {
      //验证码比对
      const cacheAnswer = await this.cacheManager.get(dto.uniCode);
      if (cacheAnswer !== dto.answer) {
        this.cacheManager.del(dto.uniCode);
        throw new ForbiddenException("验证码错误");
      }
      const password: string = await argon.hash(dto.password);
      const user: User = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: password
        }
      });
      const payload: Record<string, any> = {
        sub: user.id,
        username: user.username
      };
      const { access_token, refresh_token } = await this.generateTokens(payload);
      return {
        ...user,
        password: "",
        access_token,
        refresh_token
      };
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException("该邮箱已被注册!");
        }
      }
      throw error;
    }
  }

  /**
   * 登录
   * @param param0
   * @returns
   */
  async signin(): Promise<Record<string, any>> {
    // async signin({ password, username, uniCode, answer }: AuthDto): Promise<Record<string, any>> {
    const { password, username, uniCode, answer }: any = {};
    //验证码比对
    const cacheAnswer = await this.cacheManager.get(uniCode);
    if (cacheAnswer !== answer) {
      this.cacheManager.del(uniCode);
      throw new ForbiddenException("验证码错误");
    } else {
      this.cacheManager.del(uniCode);
    }
    //用户是否存在
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        username: username
      }
    });
    if (!user) throw new ForbiddenException("用户名不存在或密码错误");
    //密码是否正确
    const pwMatches = await argon.verify(user.password, password);
    if (!pwMatches) throw new ForbiddenException("用户名不存在或密码错误");
    //生成token
    const payload: Record<string, any> = {
      sub: user.id,
      username: user.username
    };
    const { access_token, refresh_token } = await this.generateTokens(payload);
    return {
      ...user,
      password: "",
      access_token,
      refresh_token
    };
  }
  /**
   * 验证码
   * @param createCaptchaInput
   * @returns
   */
  async captcha(createCaptchaInput: CreateCaptchaInput): Promise<Captcha> {
    let captcha: svgCaptcha.CaptchaObj;
    if (Number(createCaptchaInput.type) == 0) {
      captcha = svgCaptcha.create({
        background: createCaptchaInput.background as string,
        size: Number(createCaptchaInput.size),
        ignoreChars: createCaptchaInput.ignoreChars as string,
        color: createCaptchaInput.color as boolean
      });
    } else {
      captcha = svgCaptcha.createMathExpr({
        background: createCaptchaInput.background as string,
        ignoreChars: createCaptchaInput.ignoreChars as string,
        color: createCaptchaInput.color as boolean
      });
    }
    const uniCode = `uni${new Date().getTime()}`;
    const time = this.config.get("captcha.expriseIn");
    await this.cacheManager.set(uniCode, captcha.text, time);
    return {
      time,
      uniCode,
      svg: captcha.data
    };
  }
}
