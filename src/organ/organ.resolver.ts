import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { OrgansService } from "./organ.service";
import { CreateOrganInput } from "./dto/create-organ.input";
import { QueryOrgansInput } from "./dto/query-organ.input";
import { UpdateOrganInput } from "./dto/update-organ.input";

@Resolver("Organ")
export class OrgansResolver {
  constructor(private readonly organsService: OrgansService) {
    this.organsService = organsService;
  }

  @Mutation("createOrgan")
  create(@Args("createOrganInput") createOrganInput: CreateOrganInput) {
    return this.organsService.create(createOrganInput);
  }

  @Query("organs")
  findAll(@Args("queryOrgansInput") queryOrgansInput: QueryOrgansInput) {
    return this.organsService.findAll(queryOrgansInput);
  }

  @Query("organ")
  findOne(@Args("id") id: string) {
    return this.organsService.findOne(id);
  }

  @Mutation("updateOrgan")
  update(@Args("id") id: string, @Args("updateOrganInput") updateOrganInput: UpdateOrganInput) {
    return this.organsService.update(updateOrganInput);
  }

  @Mutation("removeOrgan")
  remove(@Args("id") id: string) {
    return this.organsService.remove(id);
  }
}
