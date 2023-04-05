import { Prisma, User } from ".prisma/client";
import { PrismaService } from "@/common/prisma/prisma.service";
import { ForbiddenException, Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { CreateUserInput } from "./dto/create-user.input.dto";
import { UpdateUserInput } from "./dto/update-user.input.dto";
import { OrderByParams } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { UserConnection } from "@/types/graphql";

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
    { skip, after, before, first, last }: PaginationArgs,
    query: string
  ): Promise<any> {
    const result = await findManyCursorConnection(
      args =>
        this.prisma.user.findMany({
          where: {
            username: { contains: query || "" }
          },
          skip,
          orderBy: (orderBy?.field && { [orderBy.field]: orderBy.direction }) ?? {},
          ...args
        } as Prisma.UserFindManyArgs),
      () =>
        this.prisma.user.count({
          where: {
            username: { contains: query || "" }
          }
        }),
      { first, last, before, after }
    );
    return result;
  }
  /**
   * 查询单个用户信息
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User> {
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
  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
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
  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
