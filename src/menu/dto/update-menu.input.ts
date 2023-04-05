import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";
@ObjectType()
export class UpdateMenuInput {
  /**
   * id
   */
  @Field(() => Int)
  @IsNotEmpty()
  id!: number;
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
   * 授权标识
   */
  @Field(() => [String])
  @IsOptional()
  authNames!: string[];
  /**
   * 父节点id
   */
  @Field(() => String)
  @IsOptional()
  parentId?: string;
}
