import { IsNotEmpty, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { HideField, Field, InputType } from "@nestjs/graphql"
import { User } from "@/types/graphql"

@InputType()
export class UpdateUserInput {
  @Field()
  id!: number
  @Field()
  username?: string
  @Field()
  password?: string
}
