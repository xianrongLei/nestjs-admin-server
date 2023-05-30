import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateDictionaryInput {
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
   *  唯一标识
   */
  @Field()
  @IsNotEmpty()
  dictName!: string;
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
   *  备注
   */
  @Field()
  @IsOptional()
  description?: string;
  /**
   *  实体
   */
  @Field(() => ID)
  @IsOptional()
  dictEntryIds?: string;
  /**
   *  组织id
   */
  @Field(() => ID)
  @IsOptional()
  organId?: string;
}
