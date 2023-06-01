import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateUserInput } from "./create-user.input";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  /**
   * id
   */
  @Field(() => String)
  @IsNotEmpty()
  id!: string;
}
