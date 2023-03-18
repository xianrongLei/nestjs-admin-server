import { Module } from "@nestjs/common"
import { OrgansService } from "./organs.service"
import { OrgansResolver } from "./organs.resolver"

@Module({
  providers: [OrgansResolver, OrgansService]
})
export class OrgansModule {}
