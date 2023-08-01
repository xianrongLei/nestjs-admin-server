import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreatePostInput } from "./dto/create-post.input";
import type { UpdatePostInput } from "./dto/update-post.input";
import type { QueryPostInput } from "./dto/query-post.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import type { Post, PostConnection } from "@/types/graphql";

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 新建
   * @param createPostInput
   * @returns
   */
  async create(createPostInput: CreatePostInput): Promise<Post> {
    const { organId, usersIds, ...dataArgs } = createPostInput;

    const [Organ, users] = await Promise.all([
      this.prisma.organ.findFirst({ where: { id: organId } }),
      this.prisma.user.findMany({ where: { id: { in: usersIds } } })
    ]);
    return this.prisma.post.create({
      data: {
        ...dataArgs,
        Organ: { connect: { id: Organ?.id } },
        users: { connect: users.map(user => ({ id: user.id })) }
      }
    });
  }

  /**
   * 分页
   * @param createPostInput
   * @returns
   */
  async findAll(queryPostInput: QueryPostInput): Promise<PostConnection> {
    const { query, orderBy, ...pageInfo } = queryPostInput;
    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value !== null) {
        acc[key] = { contains: value };
      }
      return acc;
    }, {});

    return await findManyCursorConnection(
      args =>
        this.prisma.post.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args
        }),
      () =>
        this.prisma.post.count({
          where
        }),
      pageInfo
    );
  }

  /**
   * id查询
   * @param createPostInput
   * @returns
   */
  async findOne(id: string): Promise<Post> {
    const post = await this.prisma.post.findFirst({
      where: {
        id
      }
    });
    if (!post) throw new NotFoundException("Not Found!");
    return post;
  }

  /**
   * 更新
   * @param createPostInput
   * @returns
   */
  async update(updatePostInput: UpdatePostInput): Promise<Post> {
    const { id, organId, usersIds, ...dataArgs } = updatePostInput;
    const [Organ, users] = await Promise.all([
      this.prisma.organ.findFirst({ where: { id: organId } }),
      this.prisma.user.findMany({ where: { id: { in: usersIds } } })
    ]);
    return this.prisma.post.update({
      where: {
        id
      },
      data: {
        Organ: { connect: { id: Organ?.id } },
        users: { connect: users.map(user => ({ id: user.id })) },
        ...dataArgs
      }
    });
  }

  /**
   * 删除
   * @param createPostInput
   * @returns
   */
  async remove(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id
      }
    });
  }
}
