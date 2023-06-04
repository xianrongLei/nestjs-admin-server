import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";
@ObjectType()
export class CreateMenuInput {
  /**
   * 是否缓存
   */
  @Field(() => Boolean)
  @IsOptional()
  isCache?: boolean;
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   * 状态 0禁用1启用
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   * 菜单名称
   */
  @Field(() => String)
  @IsNotEmpty()
  name!: string;
  /**
   * 描述
   */
  @Field(() => String)
  @IsOptional()
  description?: string;
  /**
   * 路由地址
   */
  @Field(() => String)
  @IsNotEmpty()
  route!: string;
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
   * 类型 0菜单1按钮2接口
   */
  @Field(() => Int)
  @IsOptional()
  type?: number;
  /**
   * 组件地址
   */
  @Field(() => String)
  @IsOptional()
  component?: string;
  /**
   * 是否外部打开 true是
   */
  @Field(() => Boolean)
  @IsOptional()
  outside?: boolean;
  /**
   * 父节点id
   */
  @Field(() => ID)
  @IsOptional()
  parentId?: string;
  /**
   * 父节点id
   */
  @Field(() => [ID])
  @IsOptional()
  childrenIds?: string[];
  /**
   * 父节点id
   */
  @Field(() => [ID])
  @IsOptional()
  rolesIds?: string[];
}
