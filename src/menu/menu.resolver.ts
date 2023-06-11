import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { MenusService } from "./menu.service";
import { CreateMenuInput } from "./dto/create-menu.input";
import { UpdateMenuInput } from "./dto/update-menu.input";
import { JwtGuard } from "@/auth/guard";
import { UseGuards } from "@nestjs/common";
import { QueryMenuInput } from "./dto/query-menu.input";
import { QueryMenusByUserIdInput } from "@/types/graphql";

// @UseGuards(JwtGuard)
@Resolver("menu")
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {
    this.menusService = menusService;
  }

  @Mutation("createMenu")
  create(@Args("createMenuInput") createMenuInput: CreateMenuInput) {
    return this.menusService.create(createMenuInput);
  }

  @Query("menus")
  findPage(@Args("queryMenuInput") queryMenuInput: QueryMenuInput) {
    return this.menusService.findPage(queryMenuInput);
  }

  @Query("menusByUserId")
  findAll(@Args("queryMenusByUserIdInput") queryMenusByUserIdInput: QueryMenusByUserIdInput) {
    return this.menusService.findAll(queryMenusByUserIdInput);
  }

  @Query("menu")
  findOne(@Args("id") id: string) {
    return this.menusService.findOne(id);
  }

  @Mutation("updateMenu")
  update(@Args("updateMenuInput") updateMenuInput: UpdateMenuInput) {
    return this.menusService.update(updateMenuInput);
  }

  @Mutation("removeMenu")
  remove(@Args("id") id: string) {
    return this.menusService.remove(id);
  }
}
