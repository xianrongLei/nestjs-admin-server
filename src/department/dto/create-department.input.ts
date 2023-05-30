import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateDepartmentInput {
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
   *
   */
  @Field(() => ID)
  @IsOptional()
  departmentId?: string;
  /**
   * 排序
   */
  @Field(() => ID)
  @IsOptional()
  organId?: string;
  /**
   * 排序
   */
  @Field(() => ID)
  @IsOptional()
  parentId?: string;
  /**
   * 排序
   */
  @Field(() => [Int])
  @IsOptional()
  childrenIds?: string[];
}
