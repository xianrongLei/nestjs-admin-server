import { Field, ID } from "@nestjs/graphql";
import { CreateRoleInput } from "./create-role.input";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";

export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  /**
   * ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
