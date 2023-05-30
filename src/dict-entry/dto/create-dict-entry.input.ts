import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class CreateDictEntryInput {
  /**
   *  排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   *  状态
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   *  名称
   */
  @Field(() => Int)
  @IsOptional()
  name!: string;
  /**
   *  值
   */
  @Field(() => Int)
  @IsOptional()
  value!: string;
  /**
   *  描述
   */
  @Field(() => Int)
  @IsOptional()
  notes?: string;
  /**
   *  所属字典id
   */
  @Field(() => ID)
  @IsOptional()
  dictionaryId?: string;
}
