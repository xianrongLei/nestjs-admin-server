import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class CreateMenuInput {
  /**
   * 菜单名称
   */
  @Field(() => String)
  @IsOptional()
  name?: string;
  /**
   * 路由地址
   */
  @Field(() => String)
  @IsOptional()
  route?: string;
  /**
   * 描述
   */
  @Field(() => String)
  @IsOptional()
  description?: string;
  /**
   * 图标
   */
  @Field(() => String)
  @IsOptional()
  icon?: string;
  /**
   * 菜单页签
   */
  @Field(() => String)
  @IsOptional()
  title?: string;
  /**
   * 排序
   */
  @Field(() => String)
  @IsOptional()
  sort?: string;
  /**
   * 状态 0禁用1启用
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   * 类型
   */
  @Field(() => Int)
  @IsOptional()
  type?: number;
  /**
   * 是否外部打开 true是
   */
  @Field(() => Boolean)
  @IsOptional()
  outside?: false;
  /**
   * 菜单权限
   */
  @Field(() => [Int])
  @IsOptional()
  crud?: number[];
}
