import { Field, ObjectType, ID, Int } from "@nestjs/graphql"

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id?: string
  @Field(() => Date)
  createdAt?: Date
  @Field(() => Date)
  updatedAt?: Date
  @Field(() => Int, { nullable: true })
  creator?: string
  @Field(() => Int, { nullable: true })
  updater?: string
}
