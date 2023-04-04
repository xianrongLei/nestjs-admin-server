import { Injectable } from "@nestjs/common";
import { CreateOrganInput } from "./dto/create-organ.input";
import { UpdateOrganInput } from "./dto/update-organ.input";

@Injectable()
export class OrgansService {
  create(createOrganInput: CreateOrganInput) {
    return "This action adds a new organ";
  }

  findAll() {
    return `This action returns all organs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organ`;
  }

  update(id: number, updateOrganInput: UpdateOrganInput) {
    return `This action updates a #${id} organ`;
  }

  remove(id: number) {
    return `This action removes a #${id} organ`;
  }
}
