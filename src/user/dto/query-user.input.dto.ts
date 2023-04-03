import { Field, HideField, InputType, Int } from "@nestjs/graphql"

@InputType()
export class QueryUserInput {
  @Field(() => Int, { nullable: false })
  id!: number
  @Field(() => String, { nullable: false })
  username?: string
  @HideField()
  password?: string
}
