import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DepartmentService } from "./department.service";
import { CreateDepartmentInput } from "./dto/create-department.input";
import { UpdateDepartmentInput } from "./dto/update-department.input";
import { QeruyDepartmentInput } from "./dto/query-department.input";

@Resolver("Department")
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Mutation("createDepartment")
  create(@Args("createDepartmentInput") createDepartmentInput: CreateDepartmentInput) {
    return this.departmentService.create(createDepartmentInput);
  }

  @Query("departments")
  findAll(@Args("qeruyDepartmentInput") qeruyDepartmentInput: QeruyDepartmentInput) {
    return this.departmentService.findAll(qeruyDepartmentInput);
  }

  @Query("department")
  findOne(@Args("id") id: string) {
    return this.departmentService.findOne(id);
  }

  @Mutation("updateDepartment")
  update(@Args("updateDepartmentInput") updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentService.update(updateDepartmentInput.id, updateDepartmentInput);
  }

  @Mutation("removeDepartment")
  remove(@Args("id") id: string) {
    return this.departmentService.remove(id);
  }
}
