import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DictionaryService } from "./dictionary.service";
import { CreateDictionaryInput } from "./dto/create-dictionary.input";
import { UpdateDictionaryInput } from "./dto/update-dictionary.input";
import { QueryDictionaryInput } from "./dto/query-dictionary.input";

@Resolver("Dictionary")
export class DictionaryResolver {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Mutation("createDictionary")
  create(@Args("createDictionaryInput") createDictionaryInput: CreateDictionaryInput) {
    return this.dictionaryService.create(createDictionaryInput);
  }

  @Query("dictionary")
  findAll(@Args("queryDictionaryInput") queryDictionaryInput: QueryDictionaryInput) {
    return this.dictionaryService.findAll(queryDictionaryInput);
  }

  @Query("dictionaries")
  findOne(@Args("id") id: string) {
    return this.dictionaryService.findOne(id);
  }

  @Mutation("updateDictionary")
  update(@Args("updateDictionaryInput") updateDictionaryInput: UpdateDictionaryInput) {
    return this.dictionaryService.update(updateDictionaryInput);
  }

  @Mutation("removeDictionary")
  remove(@Args("id") id: string) {
    return this.dictionaryService.remove(id);
  }
}
