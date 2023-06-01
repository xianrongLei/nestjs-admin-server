import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { RoleOrderBy, RoleQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryRoleInput extends PaginationArgs {
  /**
   * 按照哪个字段排序
   */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: RoleOrderBy;
  /**
   * 查询条件
   */
  @Field({ nullable: true })
  @IsOptional()
  query?: RoleQuery;
}
