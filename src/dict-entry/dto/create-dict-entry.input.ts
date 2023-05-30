import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

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
  @Field()
  @IsNotEmpty()
  name!: string;
  /**
   *  值
   */
  @Field()
  @IsNotEmpty()
  value!: string;
  /**
   *  描述
   */
  @Field()
  @IsOptional()
  description?: string;
  /**
   *  所属字典id
   */
  @Field(() => ID)
  @IsOptional()
  dictionaryId?: string;
}
