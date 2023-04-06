import { Prisma, User } from ".prisma/client";
import { PrismaService } from "@/common/prisma/prisma.service";
import { ForbiddenException, Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { CreateUserInput } from "./dto/create-user.input.dto";
import { UpdateUserInput } from "./dto/update-user.input.dto";
import { OrderByParams, UserConnection, UserQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

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
    try {
      const password: string = await argon.hash(createUserInput.password);
      const user = await this.prisma.user.create({
        data: {
          ...createUserInput,
          password
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
   * 查询所有用户
   * @param orderBy
   * @returns
   */
  async findAll(
    orderBy: OrderByParams,
    { after, before, first, last }: PaginationArgs,
    query: UserQuery
  ): Promise<UserConnection> {
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
    result.edges.forEach(user => (user.node.password = ""));
    return result;
  }
  /**
   * 查询单个用户信息
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<User> {
    return <User>await this.prisma.user.findFirst({
      where: {
        id
      }
    });
  }

  /**
   * 更新用户信息
   * @param id
   * @param updateUserInput
   * @returns
   */
  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id
      },
      data: updateUserInput
    });
  }

  /**
   * 删除用户
   * @param id
   * @returns
   */
  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
