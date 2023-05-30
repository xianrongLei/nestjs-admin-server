import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

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
  @IsNotEmpty()
  name!: string;
  /**
   * 机构唯一标识
   */
  @Field(() => String)
  @IsNotEmpty()
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
  @Field(() => [ID])
  @IsOptional()
  departmentIds?: string[];
  /**
   * 机构内岗位ids
   */
  @Field(() => [ID])
  @IsOptional()
  postIds?: string[];
  /**
   * 机构内角色ids
   */
  @Field(() => [ID])
  @IsOptional()
  roleIds?: string[];
  /**
   * 机构内字典ids
   */
  @Field(() => [ID])
  @IsOptional()
  DictionaryIds?: string[];
  /**
   * 机构内用户ids
   */
  @Field(() => [ID])
  @IsOptional()
  userIds?: string[];
}
