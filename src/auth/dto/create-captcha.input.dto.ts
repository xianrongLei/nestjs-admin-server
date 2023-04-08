import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class CreateCaptchaInput {
  /**
   * 背景颜色 默认透明
   */
  @Field()
  @IsOptional()
  background?: string;
  /**
   * 干扰横向数量 默认1
   */
  @Field()
  @IsOptional()
  ignoreChars?: string;
  /**
   * 验证码类型 0是字符串 1 是算数
   * 默认是算数
   */
  @Field()
  @IsOptional()
  type?: number;
  /**
   * width of captcha
   */
  @Field()
  @IsOptional()
  size?: number;
  /**
   * 是否需要随机文字色彩
   * 默认值 true
   */
  @Field()
  @IsOptional()
  color?: boolean;
}
