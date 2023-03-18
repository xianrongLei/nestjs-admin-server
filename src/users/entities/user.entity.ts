import { BaseModel } from "@/common/models/base.model"
import { Field, HideField, Int, ObjectType } from "@nestjs/graphql"
import { IsEmail, IsNumber, IsString } from "class-validator"

@ObjectType()
export class User extends BaseModel {
  @IsString()
  @Field(() => String)
  username!: string

  @IsString()
  @Field(() => HideField)
  password!: string

  @IsString()
  @Field(() => HideField)
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

  @Field(() => Object)
  roles!: object[]

  @Field(() => Object)
  posts!: object[]
}
