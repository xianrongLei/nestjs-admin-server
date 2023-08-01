import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreateRoleInput } from "./dto/create-role.input";
import type { UpdateRoleInput } from "./dto/update-role.input";
import type { QueryRoleInput } from "./dto/query-role.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import type { Role, RoleConnection } from "@/types/graphql";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * c
   * @param createRoleInput
   * @returns
   */
  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    const { menusIds, usersIds, organId, ...dataArgs } = createRoleInput;

    const [menus, users, Organ] = await Promise.all([
      this.prisma.menu.findMany({ where: { id: { in: menusIds } } }),
      this.prisma.user.findMany({ where: { id: { in: usersIds } } }),
      this.prisma.user.findFirst({ where: { id: organId } })
    ]);
    return this.prisma.role.create({
      data: {
        ...dataArgs,
        Organ: { connect: { id: Organ?.id } },
        menus: { connect: menus.map(menu => ({ id: menu.id })) },
        users: { connect: users.map(user => ({ id: user.id })) }
      }
    });
  }
  /**
   * r
   * @param createRoleInput
   * @returns
   */
  async findAll(queryRoleInput: QueryRoleInput): Promise<RoleConnection> {
    const { query, orderBy, ...pageInfo } = queryRoleInput;
    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value != null) {
        acc[key] = { continue: value };
      }
      return acc;
    }, {});

    return await findManyCursorConnection(
      args =>
        this.prisma.role.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args
        }),
      () =>
        this.prisma.role.count({
          where
        }),
      pageInfo
    );
  }
  /**
   * r
   * @param createRoleInput
   * @returns
   */
  async findOne(id: string): Promise<Role> {
    const role = await this.prisma.role.findFirst({
      where: {
        id
      }
    });
    if (!role) throw new NotFoundException("Not Found!");
    return role;
  }
  /**
   * u
   * @param createRoleInput
   * @returns
   */
  async update(updateRoleInput: UpdateRoleInput): Promise<Role> {
    const { id, ...args } = updateRoleInput;
    return this.prisma.role.update({
      where: {
        id
      },
      data: args
    });
  }
  /**
   * d
   * @param createRoleInput
   * @returns
   */
  async remove(id: string): Promise<Role> {
    return this.prisma.role.delete({
      where: {
        id
      }
    });
  }
}
