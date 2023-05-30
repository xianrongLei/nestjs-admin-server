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
   *  名称
   */
  @Field(() => Int)
  @IsNotEmpty()
  dictName!: string;
  /**
   *  值
   */
  @Field(() => Int)
  @IsNotEmpty()
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
Int;
Int;
String;
String;
String[ID][ID];
