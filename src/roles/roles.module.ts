import { Module } from "@nestjs/common"
import { RolesService } from "./roles.service"
import { RolesResolver } from "./roles.resolver"

@Module({
  providers: [RolesResolver, RolesService]
})
export class RolesModule {}
