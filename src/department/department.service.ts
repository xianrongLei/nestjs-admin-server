import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreateDepartmentInput } from "./dto/create-department.input";
import type { UpdateDepartmentInput } from "./dto/update-department.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import type { QueryDepartmentInput } from "./dto/query-department.input";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import type { Department, DepartmentConnection } from "@/types/graphql";

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 新建部门
   * @param param0
   * @returns
   */
  async create({ childrenIds, organId, parentId, ...dataArgs }: CreateDepartmentInput): Promise<Department> {
    const [children, Organ, parent] = await Promise.all([
      this.prisma.department.findMany({ where: { id: { in: childrenIds } } }),
      this.prisma.organ.findFirst({ where: { id: organId } }),
      this.prisma.department.findFirst({ where: { id: parentId } })
    ]);
    return await this.prisma.department.create({
      data: {
        ...dataArgs,
        children: { connect: children.map(child => ({ id: child.id })) },
        Organ: { connect: { id: Organ?.id } },
        parent: { connect: { id: parent?.id } }
      }
    });
  }
  /**
   * 分页查询部门
   * @param queryDepartmentInput
   * @returns
   */
  async findAll(queryDepartmentInput: QueryDepartmentInput): Promise<DepartmentConnection> {
    const { query, orderBy, ...pageInfo } = queryDepartmentInput;

    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value != null) {
        acc[key] = { contains: value };
      }
      return acc;
    }, {});
    const result = await findManyCursorConnection(
      args =>
        this.prisma.department.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args
        }),
      () => this.prisma.department.count({ where }),
      {
        ...pageInfo
      }
    );
    return result;
  }
  /**
   * 根据id查询部门
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<Department> {
    const department = await this.prisma.department.findFirst({
      where: {
        id
      }
    });
    if (!department) throw new NotFoundException("未找到该部门");
    return department;
  }
  /**
   * 根据id更新部门
   * @param id
   * @returns
   */
  async update(id: string, updateDepartmentInput: UpdateDepartmentInput): Promise<Department> {
    return await this.prisma.department.update({
      where: {
        id
      },
      data: { ...updateDepartmentInput }
    });
  }
  /**
   * 根据id删除部门
   * @param id
   * @returns
   */
  async remove(id: string): Promise<Department> {
    return await this.prisma.department.delete({
      where: {
        id
      }
    });
  }
}
