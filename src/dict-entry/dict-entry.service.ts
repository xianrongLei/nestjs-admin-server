import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDictEntryInput } from "./dto/create-dict-entry.input";
import { UpdateDictEntryInput } from "./dto/update-dict-entry.input";
import { QueryDictEntryInput } from "./dto/query-dict-entry.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import { DictEntry, DictEntryConnection } from "@/types/graphql";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

@Injectable()
export class DictEntryService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   * 新建字典实体
   * @param createDictEntryInput
   * @returns
   */
  async create(createDictEntryInput: CreateDictEntryInput): Promise<DictEntry> {
    return await this.prisma.dictEntry.create({
      data: createDictEntryInput
    });
  }
  /**
   * 分页查询字典
   * @param queryDictEntryInput
   * @returns
   */
  async findAll(queryDictEntryInput: QueryDictEntryInput): Promise<DictEntryConnection> {
    const { query, orderBy, ...pageInfo } = queryDictEntryInput;

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
   * 根据id查找实体
   * @param updateDictEntryInput
   * @returns
   */
  async findOne(id: string): Promise<DictEntry> {
    const docitEnrty = await this.prisma.dictEntry.findFirst({
      where: {
        id
      }
    });
    if (!docitEnrty) throw new NotFoundException("Not Found!");
    return docitEnrty;
  }
  /**
   * 根据id更新实体
   * @param updateDictEntryInput
   * @returns
   */
  async update(updateDictEntryInput: UpdateDictEntryInput): Promise<DictEntry> {
    const { id, ...dataArgs } = updateDictEntryInput;
    return await this.prisma.dictEntry.update({
      where: {
        id
      },
      data: {
        ...dataArgs
      }
    });
  }
  /**
   * 根据id删除实体
   * @param updateDictEntryInput
   * @returns
   */
  async remove(id: string): Promise<DictEntry> {
    return await this.prisma.dictEntry.delete({
      where: {
        id
      }
    });
  }
}
