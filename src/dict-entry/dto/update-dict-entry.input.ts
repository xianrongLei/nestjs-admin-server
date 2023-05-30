import { Field, ID } from "@nestjs/graphql";
import { CreateDictEntryInput } from "./create-dict-entry.input";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";

export class UpdateDictEntryInput extends PartialType(CreateDictEntryInput) {
  /**
   * 组织ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
