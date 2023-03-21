import { Module } from "@nestjs/common"
import { RolesService } from "./role.service"
import { RolesResolver } from "./role.resolver"

@Module({
  providers: [RolesResolver, RolesService]
})
export class RolesModule {}
