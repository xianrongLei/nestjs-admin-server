import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PageInfo {
  @Field(() => String, { nullable: true })
  endCursor?: string;

  @Field(() => Boolean)
  hasNextPage: boolean = false;

  @Field(() => Boolean)
  hasPreviousPage: boolean = false;

  @Field(() => String, { nullable: true })
  startCursor?: string;
}
