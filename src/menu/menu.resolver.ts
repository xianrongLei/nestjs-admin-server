import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { MenusService } from "./menu.service"
import { CreateMenuInput } from "./dto/create-menu.input"
import { UpdateMenuInput } from "./dto/update-menu.input"

@Resolver("Menu")
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {}

  @Mutation("createMenu")
  create(@Args("createMenuInput") createMenuInput: CreateMenuInput) {
    return this.menusService.create(createMenuInput)
  }

  @Query("menus")
  findAll() {
    return this.menusService.findAll()
  }

  @Query("menu")
  findOne(@Args("id") id: number) {
    return this.menusService.findOne(id)
  }

  @Mutation("updateMenu")
  update(@Args("updateMenuInput") updateMenuInput: UpdateMenuInput) {
    return this.menusService.update(updateMenuInput.id, updateMenuInput)
  }

  @Mutation("removeMenu")
  remove(@Args("id") id: number) {
    return this.menusService.remove(id)
  }
}
