import { PrismaService } from "@/common/prisma/prisma.service";
import { Prisma } from ".prisma/client";
import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import * as argon from "argon2";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User, UserConnection } from "@/types/graphql";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { QueryUserInput } from "./dto/query-user-input";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 创建用户
   * @param createUserInput
   * @returns
   */
  async create(createUserInput: CreateUserInput): Promise<User> {
    const { postsIds, organsIds, roleId, ...dataArgs } = createUserInput;
    const [posts, organs, Role] = await Promise.all([
      this.prisma.post.findMany({ where: { id: { in: postsIds } } }),
      this.prisma.organ.findMany({ where: { id: { in: organsIds } } }),
      this.prisma.role.findFirst({ where: { id: roleId } })
    ]);
    try {
      const password: string = await argon.hash(dataArgs.password);
      const user = await this.prisma.user.create({
        data: {
          ...dataArgs,
          password,
          posts: { connect: posts.map(post => ({ id: post.id })) },
          organs: { connect: organs.map(post => ({ id: post.id })) },
          Role: { connect: { id: Role?.id } }
        }
      });
      return { ...user, password: "" };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException(`${error?.meta?.target} should be unique`);
        }
      }
      throw error;
    }
  }

  /**
   * 分页查询用户
   * @param orderBy
   * @returns
   */
  async findAll(queryUserInput: QueryUserInput): Promise<UserConnection> {
    const { query, orderBy, ...pageInfo } = queryUserInput;
    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value != null) {
        acc[key] = { contains: value };
      }
      return acc;
    }, {});

    return await findManyCursorConnection(
      args =>
        this.prisma.user.findMany({
          where,
          orderBy: (orderBy?.field && { [orderBy.field]: orderBy.direction }) ?? {},
          ...args
        }),
      () =>
        this.prisma.user.count({
          where
        }),
      pageInfo
    );
  }
  /**
   * 查询单个用户信息
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return {
      ...user,
      password: ""
    };
  }

  /**
   * 更新用户信息
   * @param id
   * @param updateUserInput
   * @returns
   */
  async update(updateUserInput: UpdateUserInput): Promise<User> {
    const { id, roleId, postsIds, organsIds, ...dataArgs } = updateUserInput;
    const [posts, organs, Role] = await Promise.all([
      this.prisma.post.findMany({ where: { id: { in: postsIds } } }),
      this.prisma.organ.findMany({ where: { id: { in: organsIds } } }),
      this.prisma.role.findFirst({ where: { id: roleId } })
    ]);
    return await this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...dataArgs,
        posts: { connect: posts.map(post => ({ id: post.id })) },
        organs: { connect: organs.map(post => ({ id: post.id })) },
        Role: { connect: { id: Role?.id } }
      }
    });
  }

  /**
   * 删除用户
   * @param id
   * @returns
   */
  async remove(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
