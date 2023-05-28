import { Injectable } from "@nestjs/common";
import { CreateDictionaryInput } from "./dto/create-dictionary.input";
import { UpdateDictionaryInput } from "./dto/update-dictionary.input";

@Injectable()
export class DictionaryService {
  create(createDictionaryInput: CreateDictionaryInput) {
    return "This action adds a new dictionary";
  }

  findAll() {
    return `This action returns all dictionary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dictionary`;
  }

  update(id: number, updateDictionaryInput: UpdateDictionaryInput) {
    return `This action updates a #${id} dictionary`;
  }

  remove(id: number) {
    return `This action removes a #${id} dictionary`;
  }
}
