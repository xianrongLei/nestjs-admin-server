import { CACHE_MANAGER, ForbiddenException, Injectable, Inject } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import type { User } from ".prisma/client";
import { Prisma } from ".prisma/client";
import svgCaptcha from "svg-captcha";
import { Cache } from "cache-manager";
import type { Auth, Captcha, Token } from "@/types/graphql";
import type { CreateCaptchaInput } from "./dto/create-captcha.input";
import type { SignInInput } from "./dto/sign-in.input";
import type { SignUpInput } from "./dto/sign-up.input";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {
    this.cacheManager = cacheManager;
    this.prisma = prisma;
    this.config = config;
    this.jwt = jwt;
  }
  /**
   * 生成token
   * @param payload
   * @returns
   */
  async generateTokens(payload: Record<string, any>): Promise<Token> {
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow("jwt.secret")
    });
    const refreshToken = await this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow("jwt.secret"),
      expiresIn: "30d"
    });
    return {
      access_token: accessToken,
      refresh_token: refreshToken
    };
  }
  /**
   * 验证码
   * @param createCaptchaInput
   * @returns
   */
  async captcha(createCaptchaInput: CreateCaptchaInput): Promise<Captcha> {
    let captcha: svgCaptcha.CaptchaObj;
    const uniCode = `uni${new Date().getTime()}`;
    const time = this.config.getOrThrow("captcha.expiresIn");
    if (createCaptchaInput.type === 0) {
      captcha = svgCaptcha.create({
        background: createCaptchaInput.background,
        size: createCaptchaInput.size,
        ignoreChars: createCaptchaInput.ignoreChars,
        color: createCaptchaInput.color
      });
    } else {
      captcha = svgCaptcha.createMathExpr({
        background: createCaptchaInput.background,
        ignoreChars: createCaptchaInput.ignoreChars,
        color: createCaptchaInput.color
      });
    }
    await this.cacheManager.set(uniCode, captcha.text.toLowerCase(), time);
    return {
      time,
      uniCode,
      svg: captcha.data
    };
  }
  /**
   * 注册
   * @param param0
   * @returns
   */
  async signUp(signUpInput: SignUpInput): Promise<Auth> {
    const { uniCode, answer } = signUpInput;
    try {
      //验证码比对
      const cacheAnswer = (await this.cacheManager.get(uniCode)) as string;
      if (cacheAnswer.toLowerCase() !== answer) {
        this.cacheManager.del(uniCode);
        throw new ForbiddenException("验证码错误");
      }
      const password: string = await argon.hash(signUpInput.user.password);
      const user: User = await this.prisma.user.create({
        data: {
          username: signUpInput.user.username,
          password: password
        }
      });
      const payload: Record<string, any> = {
        id: user.id,
        username: user.username
      };
      const { access_token, refresh_token } = await this.generateTokens(payload);
      return {
        user: { ...user, password: "" },
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
  async signIn(signInInput: SignInInput): Promise<Auth> {
    const { uniCode, answer } = signInInput;
    //验证码比对
    const cacheAnswer = (await this.cacheManager.get(uniCode)) as string;
    if (cacheAnswer?.toLowerCase() !== answer) {
      this.cacheManager.del(uniCode);
      throw new ForbiddenException("验证码错误");
    } else {
      this.cacheManager.del(uniCode);
    }
    //用户是否存在
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        username: signInInput.username
      }
    });
    if (!user) throw new ForbiddenException("用户名不存在或密码错误");
    //密码是否正确
    const pwMatches = await argon.verify(user.password, signInInput.password);
    if (!pwMatches) throw new ForbiddenException("用户名不存在或密码错误");
    //生成token
    const payload: Record<string, any> = {
      id: user.id,
      username: user.username
    };
    const { access_token, refresh_token } = await this.generateTokens(payload);
    return {
      user: { ...user, password: "" },
      access_token,
      refresh_token
    };
  }
}
