import { Field, ID, InputType } from "@nestjs/graphql";
import { CreateOrganInput } from "./create-organ.input";
import { IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

@InputType()
export class UpdateOrganInput extends PartialType(CreateOrganInput) {
  /**
   * 组织ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
