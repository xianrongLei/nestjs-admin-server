import { Injectable } from "@nestjs/common";
import { CreateMenuInput } from "./dto/create-menu.input";
import { UpdateMenuInput } from "./dto/update-menu.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import { Menu, MenuConnection, MenuOrderBy, MenuQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";
import { Prisma } from ".prisma/client";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
@Injectable()
export class MenusService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 添加菜单
   * @param createMenuInput
   * @returns
   */
  async create(createMenuInput: CreateMenuInput): Promise<Menu> {
    return await this.prisma.menu.create({
      data: createMenuInput
    });
  }
  /**
   * 查询所有菜单
   * @param orderBy
   * @param param1
   * @param query
   * @returns
   */
  async findAll(
    orderBy: MenuOrderBy,
    { after, before, first, last }: PaginationArgs,
    query: MenuQuery
  ): Promise<MenuConnection> {
    const where: Prisma.UserWhereInput = {};
    for (const iterator in query) {
      const value = query[iterator];
      where[iterator] = { contains: value };
    }
    const result = await findManyCursorConnection(
      args =>
        this.prisma.user.findMany({
          where: where,
          orderBy: (orderBy?.field && { [orderBy.field]: orderBy.direction }) ?? {},
          ...args
        }),
      () =>
        this.prisma.user.count({
          where: where
        }),
      { first, last, before, after }
    );
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
