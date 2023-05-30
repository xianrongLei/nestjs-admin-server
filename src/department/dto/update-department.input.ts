import { Field, ID } from "@nestjs/graphql";
import { CreateDepartmentInput } from "./create-department.input";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";

export class UpdateDepartmentInput extends PartialType(CreateDepartmentInput) {
  /**
   * 部门ID
   */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
