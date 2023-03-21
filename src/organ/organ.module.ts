import { Module } from "@nestjs/common"
import { OrgansService } from "./organ.service"
import { OrgansResolver } from "./organ.resolver"

@Module({
  providers: [OrgansResolver, OrgansService]
})
export class OrgansModule {}
