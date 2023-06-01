import { CreateUserInput } from "@/user/dto/create-user.input";
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class SignUpInput {
  /**
   * 用户信息
   */
  @Field()
  @IsNotEmpty()
  user!: CreateUserInput;
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
