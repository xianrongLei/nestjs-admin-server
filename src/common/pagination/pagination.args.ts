import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty } from "class-validator";

@InputType()
export class PaginationArgs {
  /**
   * 游标，用于查询结果的分页
   */
  @Field({ nullable: true })
  @IsOptional()
  after?: string;

  /**
   * 游标，用于查询结果的分页
   */
  @Field({ nullable: true })
  @IsOptional()
  before?: string;

  /**
   * 查询结果中要返回的第一个节点的数量
   */
  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  first!: number;

  /**
   * 查询结果中要返回的第一个节点的数量
   */
  @Field(() => Int, { nullable: true })
  @IsOptional()
  last?: number;
  /**
   * 跳过前面的节点数量
   */
  @Field(() => Int, { nullable: true })
  @IsOptional()
  skip?: number;
}
