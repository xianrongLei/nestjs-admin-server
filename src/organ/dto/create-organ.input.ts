import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class CreateOrganInput {
  /**
   * 排序
   */
  @Field(() => Int)
  @IsOptional()
  sort?: number;
  /**
   * 状态
   */
  @Field(() => Int)
  @IsOptional()
  state?: number;
  /**
   * 机构名称
   */
  @Field(() => String)
  @IsOptional()
  name!: string;
  /**
   * 机构唯一标识
   */
  @Field(() => String)
  @IsOptional()
  uniqueName!: string;
  /**
   * 机构描述
   */
  @Field(() => String)
  @IsOptional()
  description?: string;
  /**
   * 机构内的部门ids
   */
  @Field(() => String)
  @IsOptional()
  departmentIds?: string[];
  /**
   * 机构内岗位ids
   */
  @Field(() => String)
  @IsOptional()
  postIds?: string[];
  /**
   * 机构内角色ids
   */
  @Field(() => String)
  @IsOptional()
  roleIds?: string[];
  /**
   * 机构内字典ids
   */
  @Field(() => String)
  @IsOptional()
  DictionaryIds?: string[];
  /**
   * 机构内用户ids
   */
  @Field(() => String)
  @IsOptional()
  userIds?: string[];
}
