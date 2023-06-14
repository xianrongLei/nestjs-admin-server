import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@/common/prisma/prisma.service";
import { Menu, MenuConnection, QueryMenusByUserIdInput } from "@/types/graphql";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { QueryMenuInput } from "./dto/query-menu.input";
import { CreateMenuInput } from "./dto/create-menu.input";
import { UpdateMenuInput } from "./dto/update-menu.input";
import { generateInclude } from "@/common/utils/helpers";
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
    const { rolesIds, childrenIds, parentId, ...dataArgs } = createMenuInput;

    const [roles, children, parent] = await Promise.all([
      this.prisma.role.findMany({ where: { id: { in: rolesIds } } }),
      this.prisma.menu.findMany({ where: { id: { in: childrenIds } } }),
      this.prisma.menu.findFirst({ where: { id: parentId } })
    ]);
    return await this.prisma.menu.create({
      data: {
        ...dataArgs,
        roles: { connect: roles.map(role => ({ id: role.id })) },
        children: { connect: children.map(child => ({ id: child.id })) },
        parent: { connect: { id: parent?.id } }
      }
    });
  }
  /**
   * 分页查询菜单
   * @param orderBy
   * @param param1
   * @param query
   * @returns
   */
  async findPage(queryMenuInput: QueryMenuInput): Promise<MenuConnection> {
    const { query, orderBy, ...pageInfo } = queryMenuInput;
    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (typeof value !== "undefined") {
        acc[key] = { equals: value };
      }
      return acc;
    }, {});

    const result = findManyCursorConnection(
      args =>
        this.prisma.menu.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          include: generateInclude(6).include,
          ...args
        }),
      () =>
        this.prisma.menu.count({
          where
        }),
      pageInfo
    );
    return result;
  }
  /**
   * 根据用户id查询用户菜单
   * @param userId
   * @returns
   */
  async findAll(queryMenusByUserIdInput: QueryMenusByUserIdInput): Promise<Menu[]> {
    const { userId, orderBy, query } = queryMenusByUserIdInput;
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId
      }
    });
    if (!user?.roleId) throw new NotFoundException("RoleId is not Found!");

    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (typeof value !== "undefined") {
        acc[key] = { equals: value };
      }
      return acc;
    }, {});
    const role = await this.prisma.role.findFirst({
      where: {
        id: user.roleId
      },
      include: {
        menus: {
          where,
          orderBy: orderBy?.map(e => {
            if (!e || !e.field) {
              throw new Error("Invalid orderBy input");
            }
            const direction = e.direction?.toLowerCase();
            if (direction !== "asc" && direction !== "desc") {
              throw new Error("Invalid orderBy direction");
            }
            return {
              [e.field]: direction || "asc"
            };
          }),
          include: generateInclude(6).include
        }
      }
    });

    if (role?.menus) {
      return role.menus;
    } else {
      throw new NotFoundException("Menus is not Found!");
    }
  }
  /**
   * 查询单个菜单信息
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<Menu> {
    const menu = await this.prisma.menu.findFirst({
      where: {
        id
      }
    });
    if (!menu) throw new NotFoundException("Not Found!");
    return menu;
  }
  /**
   * 更新菜单
   * @param id
   * @returns
   */
  async update(updateMenuInput: UpdateMenuInput): Promise<Menu> {
    const { id, ...dataArgs } = updateMenuInput;
    return this.prisma.menu.update({
      where: {
        id
      },
      data: {
        ...dataArgs
      }
    });
  }
  /**
   * 删除菜单
   * @param id
   * @returns
   */
  async remove(id: string): Promise<Menu> {
    return this.prisma.menu.delete({
      where: {
        id
      }
    });
  }
}
