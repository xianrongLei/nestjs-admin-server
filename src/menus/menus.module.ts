import { Module } from "@nestjs/common"
import { MenusService } from "./menus.service"
import { MenusResolver } from "./menus.resolver"

@Module({
  providers: [MenusResolver, MenusService]
})
export class MenusModule {}
