import { IsEmail, IsNotEmpty, IsString, IsOptional } from "class-validator";
import { Field, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  /**
   * 用户名
   */
  @Field()
  @IsString()
  @IsNotEmpty()
  username!: string;
  /**
   * 用户密码
   */
  @Field()
  @IsString()
  @IsNotEmpty()
  password!: string;
  /**
   * 昵称
   */
  @Field()
  @IsOptional()
  nickname?: string;
  /**
   * 邮箱
   */
  @Field()
  @IsEmail()
  @IsOptional()
  email?: string;
  /**
   * 手机号码
   */
  @Field()
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
  age?: number;
  /**
   * 是否管理员 0否 1是
   */
  @Field(() => Int)
  @IsOptional()
  admin?: number;
  /**
   * 用户头像
   */
  @Field()
  @IsOptional()
  avatar?: string;
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
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   * 角色id
   */
  @Field(() => ID)
  @IsOptional()
  roleId?: string;
  /**
   * 组织ids
   */
  @Field(() => [ID])
  @IsOptional()
  organsIds?: string[];
  /**
   * 岗位ids
   */
  @Field(() => [ID])
  @IsOptional()
  postsIds?: string[];
}
