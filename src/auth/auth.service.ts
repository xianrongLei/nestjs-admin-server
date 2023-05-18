import { CACHE_MANAGER, ForbiddenException, Injectable, Inject } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User, Prisma } from ".prisma/client";
import svgCaptcha from "svg-captcha";
import { Cache } from "cache-manager";
import { Auth, Captcha } from "@/types/graphql";
import { CreateCaptchaInput } from "./dto/create-captcha.input.dto";
import { CreateAuthInput } from "./dto/create-auth.input.dto";

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
   * 验证码
   * @param createCaptchaInput
   * @returns
   */
  async captcha(createCaptchaInput: CreateCaptchaInput): Promise<Captcha> {
    let captcha: svgCaptcha.CaptchaObj;
    const uniCode = `uni${new Date().getTime()}`;
    const time = this.config.get("captcha.expriseIn");
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
  async signup(createAuthInput: CreateAuthInput): Promise<Auth> {
    // async signup(dto: AuthDto): Promise<Record<string, any>> {
    try {
      //验证码比对
      const cacheAnswer = (await this.cacheManager.get(createAuthInput.uniCode)) as string;
      if (cacheAnswer.toLowerCase() !== createAuthInput.answer) {
        this.cacheManager.del(createAuthInput.uniCode);
        throw new ForbiddenException("验证码错误");
      }
      const password: string = await argon.hash(createAuthInput.user.password);
      const user: User = await this.prisma.user.create({
        data: {
          username: createAuthInput.user.username,
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
  async signin(createAuthInput: CreateAuthInput): Promise<Auth> {
    const { uniCode, answer } = createAuthInput;
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
        username: createAuthInput.user.username
      }
    });
    if (!user) throw new ForbiddenException("用户名不存在或密码错误");
    //密码是否正确
    const pwMatches = await argon.verify(user.password, createAuthInput.user.password);
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
