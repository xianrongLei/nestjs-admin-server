import { CreateDictionaryInput } from "./create-dictionary.input";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateDictionaryInput extends PartialType(CreateDictionaryInput) {
  id!: number;
}
