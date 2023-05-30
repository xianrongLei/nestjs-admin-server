import { Field, ID } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateDictionaryInput } from "./create-dictionary.input";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateDictionaryInput extends PartialType(CreateDictionaryInput) {
  /**
   * 字典ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
