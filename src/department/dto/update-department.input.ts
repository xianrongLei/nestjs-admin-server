import { CreateDepartmentInput } from "./create-department.input";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateDepartmentInput extends PartialType(CreateDepartmentInput) {
  id!: string;
}
