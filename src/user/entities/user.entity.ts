import { Field, HideField, ID, InputType, Int } from "@nestjs/graphql"
import { IsEmail } from "class-validator"

@InputType()
export class User {
  /**
   * 昵称
   */
  @Field(() => String)
  nickname?: string
  /**
   * 用户名
   */
  @Field()
  username?: string
  /**
   * 密码
   */
  @Field()
  @HideField()
  password?: string
  /**
   * id
   */
  @Field(() => ID)
  id?: number
  /**
   * 创建时间
   */
  @Field(() => Date)
  createdAt?: string
  /**
   * 更新时间
   */
  @Field(() => Date)
  updatedAt?: string
  /**
   * 创建人
   */
  @Field(() => Int)
  creator?: number
  /**
   * 更新人
   */
  @Field(() => Int)
  updater?: number
  /**
   * 邮箱
   */
  @Field()
  @IsEmail()
  email?: string
  /**
   * 手机号码
   */
  @Field(() => Int)
  phone?: number
  /**
   * 年龄
   */
  @Field(() => Int)
  age?: number
  /**
   * 性别
   */
  @Field(() => Int)
  sex?: number
  /**
   * 是否是管理员
   */
  @Field(() => Int)
  admin?: number
  /**
   * 头像
   */
  @Field()
  avatar?: string
  // /**
  //  * 组织id
  //  */
  // @Field()
  // organId?: string
  // /**
  //  * 状态
  //  */
  // @Field()
  // state?: string
  // /**
  //  * 组织信息
  //  */
  // @Field()
  // Organ?: string
  // /**
  //  * 岗位
  //  */
  // @Field()
  // Post?: string
  // /**
  //  * 角色
  //  */
  // @Field()
  // Role?: string
}
