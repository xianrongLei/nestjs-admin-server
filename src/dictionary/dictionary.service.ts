import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreateDictionaryInput } from "./dto/create-dictionary.input";
import type { UpdateDictionaryInput } from "./dto/update-dictionary.input";
import type { QueryDictionaryInput } from "./dto/query-dictionary.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import type { Dictionary, DictionaryConnection } from "@/types/graphql";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

@Injectable()
export class DictionaryService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  /**
   *  新建字典
   * @param createDictionaryInput
   * @returns
   */
  async create(createDictionaryInput: CreateDictionaryInput): Promise<Dictionary> {
    const { organId, dictEntryIds, ...dataArgs } = createDictionaryInput;

    const [Organ, dictEntries] = await Promise.all([
      this.prisma.organ.findFirst({ where: { id: organId } }),
      this.prisma.dictEntry.findMany({ where: { id: { in: dictEntryIds } } })
    ]);
    return this.prisma.dictionary.create({
      data: {
        ...dataArgs,
        Organ: {
          connect: {
            id: Organ?.id
          }
        },
        dictEntries: {
          connect: dictEntries.map(dictEntry => ({ id: dictEntry.id }))
        }
      }
    });
  }
  /**
   *  分页查询字典
   * @param createDictionaryInput
   * @returns
   */
  async findAll(queryDictionaryInput: QueryDictionaryInput): Promise<DictionaryConnection> {
    const { query, orderBy, ...pageInfo } = queryDictionaryInput;

    const where = Object.entries(query || {}).reduce((acc, [key, value]) => {
      if (value != null) {
        acc[key] = { contains: value };
      }
      return acc;
    }, {});
    const result = await findManyCursorConnection(
      args =>
        this.prisma.dictionary.findMany({
          where,
          orderBy: orderBy?.field ? { [orderBy.field]: orderBy.direction } : undefined,
          ...args
        }),
      () => this.prisma.dictionary.count({ where }),
      {
        ...pageInfo
      }
    );
    return result;
  }
  /**
   *  根据id查询字典详情
   * @param createDictionaryInput
   * @returns
   */
  async findOne(id: string): Promise<Dictionary> {
    const dictionary = await this.prisma.dictionary.findFirst({
      where: {
        id
      }
    });
    if (!dictionary) throw new NotFoundException("Not Found!");
    return dictionary;
  }
  /**
   *  根据id更新字典
   * @param createDictionaryInput
   * @returns
   */
  async update(updateDictionaryInput: UpdateDictionaryInput): Promise<Dictionary> {
    const { id, ...dataArgs } = updateDictionaryInput;
    return await this.prisma.dictionary.update({
      where: {
        id
      },
      data: dataArgs
    });
  }
  /**
   *  根据id删除字典
   * @param createDictionaryInput
   * @returns
   */
  async remove(id: string): Promise<Dictionary> {
    return await this.prisma.dictionary.delete({
      where: {
        id
      }
    });
  }
}
