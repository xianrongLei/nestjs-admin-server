import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { DepartmentOderBy, DepartmentQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryDepartmentInput extends PaginationArgs {
  /**
   * 按照哪个字段排序
   */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: DepartmentOderBy;
  /**
   * 查询条件
   */
  @Field({ nullable: true })
  @IsOptional()
  query?: DepartmentQuery;
}
