import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DepartmentService } from "./department.service";
import { CreateDepartmentInput } from "./dto/create-department.input";
import { UpdateDepartmentInput } from "./dto/update-department.input";

@Resolver("Department")
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Mutation("createDepartment")
  create(@Args("createDepartmentInput") createDepartmentInput: CreateDepartmentInput) {
    return this.departmentService.create(createDepartmentInput);
  }

  @Query("department")
  findAll() {
    return this.departmentService.findAll();
  }

  @Query("department")
  findOne(@Args("id") id: number) {
    return this.departmentService.findOne(id);
  }

  @Mutation("updateDepartment")
  update(@Args("updateDepartmentInput") updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentService.update(updateDepartmentInput.id, updateDepartmentInput);
  }

  @Mutation("removeDepartment")
  remove(@Args("id") id: number) {
    return this.departmentService.remove(id);
  }
}
