import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { UserOrderBy, UserQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryUserInput extends PaginationArgs {
  /**
   * 按照哪个字段排序
   */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: UserOrderBy;
  /**
   * 查询条件
   */
  @Field({ nullable: true })
  @IsOptional()
  query?: UserQuery;
}
