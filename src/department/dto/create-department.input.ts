import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class CreateDepartmentInput {
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  name!: string;
  /**
   * 排序
   */
  @Field(() => String)
  @IsOptional()
  description?: string;
  /**
   * 排序
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
