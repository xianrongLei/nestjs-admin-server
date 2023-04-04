import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { RolesService } from "./role.service";
import { CreateRoleInput } from "./dto/create-role.input";
import { UpdateRoleInput } from "./dto/update-role.input";

@Resolver("Role")
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation("createRole")
  create(@Args("createRoleInput") createRoleInput: CreateRoleInput) {
    return this.rolesService.create(createRoleInput);
  }

  @Query("roles")
  findAll() {
    return this.rolesService.findAll();
  }

  @Query("role")
  findOne(@Args("id") id: number) {
    return this.rolesService.findOne(id);
  }

  @Mutation("updateRole")
  update(@Args("updateRoleInput") updateRoleInput: UpdateRoleInput) {
    return this.rolesService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation("removeRole")
  remove(@Args("id") id: number) {
    return this.rolesService.remove(id);
  }
}
