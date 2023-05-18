import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { MenusService } from "./menu.service";
import { CreateMenuInput } from "./dto/create-menu.input";
import { UpdateMenuInput } from "./dto/update-menu.input";
import { PaginationArgs } from "@/common/pagination/pagination.args";
import { MenuOrderBy, MenuQuery } from "@/types/graphql";
import { JwtGuard } from "@/auth/guard";
import { UseGuards } from "@nestjs/common";

@UseGuards(JwtGuard)
@Resolver("menu")
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {}

  @Mutation("createMenu")
  create(@Args("createMenuInput") createMenuInput: CreateMenuInput) {
    return this.menusService.create(createMenuInput);
  }

  @Query("menus")
  findAll(
    @Args("orderBy") orderBy: MenuOrderBy,
    @Args() paginationArgs: PaginationArgs,
    @Args("query") query: MenuQuery
  ) {
    return this.menusService.findAll(orderBy, paginationArgs, query);
  }

  @Query("menu")
  findOne(@Args("id") id: number) {
    return this.menusService.findOne(id);
  }

  @Mutation("updateMenu")
  update(@Args("updateMenuInput") updateMenuInput: UpdateMenuInput) {
    return this.menusService.update(updateMenuInput.id, updateMenuInput);
  }

  @Mutation("removeMenu")
  remove(@Args("id") id: number) {
    return this.menusService.remove(id);
  }
}
