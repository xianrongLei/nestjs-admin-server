import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CreateUserInput {
  /**
   * 用户名
   */
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  username!: string
  /**
   * 用户密码
   */
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password!: string
  /**
   * id
   */
  @Field(() => Int, { nullable: false })
  id?: number
  /**
   * 创建时间
   */
  @Field(() => Date, { nullable: false })
  createdAt?: string
  /**
   * 更新时间
   */
  @Field(() => Date, { nullable: false })
  updatedAt?: string
  /**
   * 创建人
   */
  @Field(() => Int, { nullable: false })
  creator?: number
  /**
   * 更新人
   */
  @Field(() => Int, { nullable: false })
  updater?: number
  /**
   * 昵称
   */
  @Field(() => String, { nullable: false })
  nickname?: string
  /**
   * 邮箱
   */
  @Field(() => String, { nullable: false })
  @IsEmail()
  email?: string
  /**
   * 手机号码
   */
  // @Field(() => String, { nullable: false })
  // phone?: string
  /**
   * 性别 0 女 1 男
   */
  @Field(() => Int, { nullable: false })
  sex?: number
  /**
   * 手机号码
   */
  @Field(() => Int, { nullable: false })
  age!: number
  /**
   * 是否管理员 0否 1是
   */
  @Field(() => Int, { nullable: false })
  admin?: number
  /**
   * 用户头像
   */
  @Field(() => String, { nullable: false })
  avatar?: string
  /**
   * 用户组织id
   */
  @Field(() => Int, { nullable: false })
  organId?: number
  /**
   * 用户岗位列表id
   */
  @Field(() => [Int], { nullable: false })
  posts?: number
  /**
   * 用户角色列表id
   */
  @Field(() => [Int], { nullable: false })
  roles?: number
  /**
   * 用户账号状态
   */
  @Field(() => Int, { nullable: false })
  state?: number
}
