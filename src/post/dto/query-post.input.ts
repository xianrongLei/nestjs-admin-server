import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { PostOrderBy, PostQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryPostInput extends PaginationArgs {
  /**
   * 按照哪个字段排序
   */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: PostOrderBy;
  /**
   * 查询条件
   */
  @Field({ nullable: true })
  @IsOptional()
  query?: PostQuery;
}
