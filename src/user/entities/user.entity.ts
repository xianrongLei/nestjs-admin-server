import { BaseModel } from "@/common/models/base.model"
import { Field, HideField, Int, ObjectType } from "@nestjs/graphql"
import { IsEmail, IsNumber, IsString } from "class-validator"

/**
 * user实体类
 */
@ObjectType()
export class User extends BaseModel {
  @IsString()
  @Field(() => String)
  username!: string

  @IsString()
  @Field(() => HideField)
  password!: string

  @IsString()
  @Field(() => String)
  nickname!: string

  @IsEmail()
  @IsString()
  @Field(() => String)
  email!: string

  @IsNumber()
  @Field(() => String)
  phone!: string

  @IsNumber()
  @Field(() => Number)
  sex!: number

  @IsNumber()
  @Field(() => Number)
  age!: number

  @Field(() => Int)
  orgId!: string

  @Field(() => String)
  roles!: String[]

  @Field(() => String)
  posts!: String[]

  @Field(() => String)
  organs!: string[]

  @Field(() => Int)
  admin!: number

  @Field(() => String)
  avatar!: string
}
