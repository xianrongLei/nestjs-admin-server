import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DictEntryService } from "./dict-entry.service";
import { CreateDictEntryInput } from "./dto/create-dict-entry.input";
import { UpdateDictEntryInput } from "./dto/update-dict-entry.input";
import { QueryDictEntryInput } from "./dto/query-dict-entry.input";

@Resolver("DictEntry")
export class DictEntryResolver {
  constructor(private readonly dictEntryService: DictEntryService) {}

  @Mutation("createDictEntry")
  create(@Args("createDictEntryInput") createDictEntryInput: CreateDictEntryInput) {
    return this.dictEntryService.create(createDictEntryInput);
  }

  @Query("dictEntrys")
  findAll(queryDictEntryInput: QueryDictEntryInput) {
    return this.dictEntryService.findAll(queryDictEntryInput);
  }

  @Query("dictEntry")
  findOne(@Args("id") id: string) {
    return this.dictEntryService.findOne(id);
  }

  @Mutation("updateDictEntry")
  update(@Args("updateDictEntryInput") updateDictEntryInput: UpdateDictEntryInput) {
    return this.dictEntryService.update(updateDictEntryInput);
  }

  @Mutation("removeDictEntry")
  remove(@Args("id") id: string) {
    return this.dictEntryService.remove(id);
  }
}
