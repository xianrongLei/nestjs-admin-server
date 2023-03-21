import { Injectable } from "@nestjs/common"
import { CreateMenuInput } from "./dto/create-menu.input"
import { UpdateMenuInput } from "./dto/update-menu.input"

@Injectable()
export class MenusService {
  create(createMenuInput: CreateMenuInput) {
    return "This action adds a new menu"
  }

  findAll() {
    return `This action returns all menus`
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`
  }

  remove(id: number) {
    return `This action removes a #${id} menu`
  }
}
