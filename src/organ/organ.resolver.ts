import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { OrgansService } from "./organ.service";
import { CreateOrganInput } from "./dto/create-organ.input";
import { UpdateOrganInput } from "./dto/update-organ.input";

@Resolver("Organ")
export class OrgansResolver {
  constructor(private readonly organsService: OrgansService) {}

  @Mutation("createOrgan")
  create(@Args("createOrganInput") createOrganInput: CreateOrganInput) {
    return this.organsService.create(createOrganInput);
  }

  @Query("organs")
  findAll() {
    return this.organsService.findAll();
  }

  @Query("organ")
  findOne(@Args("id") id: number) {
    return this.organsService.findOne(id);
  }

  @Mutation("updateOrgan")
  update(@Args("updateOrganInput") updateOrganInput: UpdateOrganInput) {
    return this.organsService.update(updateOrganInput.id, updateOrganInput);
  }

  @Mutation("removeOrgan")
  remove(@Args("id") id: number) {
    return this.organsService.remove(id);
  }
}
