import { IsEmail, IsNotEmpty, IsString, IsOptional, IsDate } from "class-validator";
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  /**
   * 用户名
   */
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  username!: string;
  /**
   * 用户密码
   */
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password!: string;
  /**
   * id
   */
  @Field(() => Int)
  @IsOptional()
  id?: number;
  /**
   * 创建时间
   */
  @Field(() => Date)
  @IsOptional()
  @IsDate()
  createdAt?: string;
  /**
   * 更新时间
   */
  @Field(() => Date)
  @IsOptional()
  @IsDate()
  updatedAt?: string;
  /**
   * 创建人
   */
  @Field(() => Int)
  @IsOptional()
  creator?: number;
  /**
   * 更新人
   */
  @Field(() => Int)
  @IsOptional()
  updater?: number;
  /**
   * 昵称
   */
  @Field(() => String)
  @IsOptional()
  nickname?: string;
  /**
   * 邮箱
   */
  @Field(() => String)
  @IsEmail()
  @IsOptional()
  email?: string;
  /**
   * 手机号码
   */
  @Field(() => String)
  @IsOptional()
  phone?: string;
  /**
   * 性别 0 女 1 男
   */
  @Field(() => Int)
  @IsOptional()
  sex?: number;
  /**
   * 手机号码
   */
  @Field(() => Int)
  @IsOptional()
  age!: number;
  /**
   * 是否管理员 0否 1是
   */
  @Field(() => Int)
  @IsOptional()
  admin?: number;
  /**
   * 用户头像
   */
  @Field(() => String)
  @IsOptional()
  avatar?: string;
  /**
   * 用户组织id
   */
  @Field(() => Int)
  @IsOptional()
  organId?: number;
  /**
   * 用户岗位列表id
   */
  @Field(() => [Int])
  @IsOptional()
  posts?: number;
  /**
   * 用户角色列表id
   */
  @Field(() => [Int])
  @IsOptional()
  roles?: number;
  /**
   * 用户账号状态
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
}
