import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class SignInInput {
  /**
   * 用户名
   */
  @Field()
  @IsNotEmpty()
  username!: string;
  /**
   * 密码
   */
  @Field()
  @IsNotEmpty()
  password!: string;
  /**
   * 验证码的唯一标识
   */
  @Field()
  @IsNotEmpty()
  uniCode!: string;
  /**
   * 验证码答案
   */
  @Field()
  @IsNotEmpty()
  answer!: string;
}
