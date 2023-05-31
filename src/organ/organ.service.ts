import { Injectable, NotFoundException } from "@nestjs/common";
import { Organ, OrganConnection } from "@/types/graphql";
import { PrismaService } from "@/common/prisma/prisma.service";
import { CreateOrganInput } from "./dto/create-organ.input";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { QueryOrganInput } from "./dto/query-organ.input";
import { UpdateOrganInput } from "./dto/update-organ.input";

@Injectable()
export class OrgansService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 新建部门
   * @param createOrganInput
   * @returns
   */
  async create(createOrganInput: CreateOrganInput): Promise<Organ> {
    const { departmentIds, postIds, userIds, roleIds, ...organData } = createOrganInput;

    const [departments, posts, users, roles] = await Promise.all([
      this.prisma.department.findMany({ where: { id: { in: departmentIds } } }),
      this.prisma.post.findMany({ where: { id: { in: postIds } } }),
      this.prisma.user.findMany({ where: { id: { in: userIds } } }),
      this.prisma.role.findMany({ where: { id: { in: roleIds } } })
    ]);

    return await this.prisma.organ.create({
      data: {
        ...organData,
        departments: { connect: departments.map(department => ({ id: department.id })) },
        posts: { connect: posts.map(post => ({ id: post.id })) },
        roles: { connect: roles.map(role => ({ id: role.id })) },
        users: { connect: users.map(user => ({ id: user.id })) }
      }
    });
  }
  /**
   * 分页查询组织
   * @param queryOrgansInput
   * @returns
   */
  async findAll(queryOrgansInput: QueryOrganInput): Promise<OrganConnection> {
    const { orderBy, query, ...pageInfo } = queryOrgansInput;
    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value != null) {
        acc[key] = { contains: value };
      }
      return acc;
    }, {});
    const result = await findManyCursorConnection(
      args =>
        this.prisma.organ.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args
        }),
      () =>
        this.prisma.organ.count({
          where
        }),
      { ...pageInfo }
    );
    console.log(result);
    return result;
  }
  /**
   * 根据id查询组织信息
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<Organ> {
    const organ = await this.prisma.organ.findFirst({
      where: {
        id
      }
    });
    if (!organ) throw new NotFoundException("组织不存在！");
    return organ;
  }
  /**
   * 更新组织信息
   * @param updateOrganInput
   * @returns
   */
  async update(updateOrganInput: UpdateOrganInput): Promise<Organ> {
    const { id, departmentIds, postIds, userIds, roleIds, ...organData } = updateOrganInput;

    const [departments, posts, users, roles] = await Promise.all([
      this.prisma.department.findMany({ where: { id: { in: departmentIds } } }),
      this.prisma.post.findMany({ where: { id: { in: postIds } } }),
      this.prisma.user.findMany({ where: { id: { in: userIds } } }),
      this.prisma.role.findMany({ where: { id: { in: roleIds } } })
    ]);
    const organ = await this.prisma.organ.update({
      where: {
        id
      },
      data: {
        ...organData,
        departments: { connect: departments.map(department => ({ id: department.id })) },
        posts: { connect: posts.map(post => ({ id: post.id })) },
        roles: { connect: roles.map(role => ({ id: role.id })) },
        users: { connect: users.map(user => ({ id: user.id })) }
      }
    });
    if (!organ) throw new NotFoundException("组织不存在!");
    return organ;
  }
  /**
   * 根据id删除组织
   * @param id
   * @returns
   */
  async remove(id: string) {
    const organ = await this.prisma.organ.delete({
      where: {
        id
      }
    });
    if (!organ) throw new NotFoundException("组织不存在!");
    return organ;
  }
}
