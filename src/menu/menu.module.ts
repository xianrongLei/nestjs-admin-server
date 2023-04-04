import { Module } from "@nestjs/common";
import { MenusService } from "./menu.service";
import { MenusResolver } from "./menu.resolver";

@Module({
  providers: [MenusResolver, MenusService]
})
export class MenusModule {}
