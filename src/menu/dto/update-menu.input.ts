import { Field, ID, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateMenuInput } from "./create-menu.input";
@ObjectType()
export class UpdateMenuInput extends PartialType(CreateMenuInput) {
  /**
   * id
   */
  @Field(() => ID)
  @IsNotEmpty()
  id!: string;
}
