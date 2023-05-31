import { Field, ID } from "@nestjs/graphql";
import { CreatePostInput } from "./create-post.input";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";

export class UpdatePostInput extends PartialType(CreatePostInput) {
  /**
   * ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
