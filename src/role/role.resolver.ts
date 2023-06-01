import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { RolesService } from "./role.service";
import { CreateRoleInput } from "./dto/create-role.input";
import { UpdateRoleInput } from "./dto/update-role.input";
import { QueryRoleInput } from "./dto/query-role.input";

@Resolver("Role")
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation("createRole")
  create(@Args("createRoleInput") createRoleInput: CreateRoleInput) {
    return this.rolesService.create(createRoleInput);
  }

  @Query("roles")
  findAll(@Args("queryRoleInput") queryRoleInput: QueryRoleInput) {
    return this.rolesService.findAll(queryRoleInput);
  }

  @Query("role")
  findOne(@Args("id") id: string) {
    return this.rolesService.findOne(id);
  }

  @Mutation("updateRole")
  update(@Args("updateRoleInput") updateRoleInput: UpdateRoleInput) {
    return this.rolesService.update(updateRoleInput);
  }

  @Mutation("removeRole")
  remove(@Args("id") id: string) {
    return this.rolesService.remove(id);
  }
}
