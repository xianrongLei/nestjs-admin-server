import { Field, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { DictEntryOderBy, DictEntryQuery } from "@/types/graphql";

export class QueryDictEntryInput {
  /** 按照哪个字段排序 */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: DictEntryOderBy;

  /** 游标，用于查询结果的分页 */
  @Field({ nullable: true })
  after!: string;

  /** 游标，用于查询结果的分页 */
  @Field({ nullable: true })
  before!: string;

  /** 查询结果中要返回的第一个节点的数量 */
  @Field(() => Int, { nullable: true })
  first!: number;

  /** 查询结果中要返回的最后一个节点的数量 */
  @Field(() => Int, { nullable: true })
  last!: number;

  /** 查询条件 */
  @Field({ nullable: true })
  @IsOptional()
  query?: DictEntryQuery;

  /** 跳过前面的节点数量 */
  @Field(() => Int, { nullable: true })
  @IsOptional()
  skip?: number;
}
