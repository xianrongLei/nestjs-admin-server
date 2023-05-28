import { Field, ID, InputType } from "@nestjs/graphql";
import { CreateOrganInput } from "./create-organ.input";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateOrganInput extends CreateOrganInput {
  /** 组织ID */
  @Field(() => ID, { nullable: false })
  @IsNotEmpty()
  id!: string;
}
