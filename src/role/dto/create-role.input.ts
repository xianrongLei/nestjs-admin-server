import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateRoleInput {
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   * 状态
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   * 名称
   */
  @Field(() => Int)
  @IsNotEmpty()
  name!: string;
  /**
   * 描述
   */
  @Field(() => String)
  @IsOptional()
  description?: string;
  /**
   * 排序
   */
  @Field(() => ID)
  @IsOptional()
  organId?: string;
  /**
   * 排序
   */
  @Field(() => [ID])
  @IsOptional()
  usersIds?: string[];
  /**
   * 排序
   */
  @Field(() => [ID])
  @IsOptional()
  menusIds?: string[];
}
