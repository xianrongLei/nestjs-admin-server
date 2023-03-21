import { PartialType } from "@nestjs/mapped-types"
import { CreateMenuInput } from "./create-menu.input"

export class UpdateMenuInput extends PartialType(CreateMenuInput) {
  id!: number
}
