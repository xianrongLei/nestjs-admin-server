import { CreateOrganInput } from "./create-organ.input"
import { PartialType } from "@nestjs/mapped-types"

export class UpdateOrganInput extends PartialType(CreateOrganInput) {
  id!: number
}
