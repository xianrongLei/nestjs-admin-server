import { Injectable } from "@nestjs/common";
import { CreateDepartmentInput } from "./dto/create-department.input";
import { UpdateDepartmentInput } from "./dto/update-department.input";

@Injectable()
export class DepartmentService {
  create(createDepartmentInput: CreateDepartmentInput) {
    return "This action adds a new department";
  }

  findAll() {
    return `This action returns all department`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: string, updateDepartmentInput: UpdateDepartmentInput) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
