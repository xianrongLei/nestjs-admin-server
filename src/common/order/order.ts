import { Field, InputType } from "@nestjs/graphql"

export enum OrderDirection {
  // Specifies an ascending order for a given `orderBy` argument.
  asc = "asc",
  // Specifies a descending order for a given `orderBy` argument.
  desc = "desc"
}
@InputType({ isAbstract: true })
export abstract class Order {
  @Field(() => OrderDirection)
  direction!: OrderDirection
}
