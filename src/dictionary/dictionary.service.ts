import { Injectable } from "@nestjs/common";
import { CreateDictionaryInput } from "./dto/create-dictionary.input";
import { UpdateDictionaryInput } from "./dto/update-dictionary.input";
import { QueryDictionaryInput } from "./dto/query-dictionary.input";
import { PrismaService } from "@/common/prisma/prisma.service";

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
  async create(createDictionaryInput: CreateDictionaryInput) {
    const { organId, dictEntryIds, ...dataArgs } = createDictionaryInput;

    const [Organ, dictEntries] = await Promise.all([
      this.prisma.dictEntry.findFirst({ where: { id: organId } }),
      this.prisma.dictEntry.findMany({ where: { id: { in: dictEntryIds } } })
    ]);
    this.prisma.dictionary.create({
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
    return "This action adds a new dictionary";
  }
  /**
   *  分页查询字典
   * @param createDictionaryInput
   * @returns
   */
  async findAll(queryDictionaryInput: QueryDictionaryInput) {
    return `This action returns all dictionary`;
  }
  /**
   *  根据id查询字典详情
   * @param createDictionaryInput
   * @returns
   */
  async findOne(id: string) {
    return `This action returns a #${id} dictionary`;
  }
  /**
   *  根据id更新字典
   * @param createDictionaryInput
   * @returns
   */
  async update(updateDictionaryInput: UpdateDictionaryInput) {
    return `This action updates a  dictionary`;
  }
  /**
   *  根据id删除字典
   * @param createDictionaryInput
   * @returns
   */
  async remove(id: string) {
    return `This action removes a #${id} dictionary`;
  }
}
