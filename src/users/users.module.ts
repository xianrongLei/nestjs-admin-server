import { AppResolver } from "@/app.resolver"
import { Module } from "@nestjs/common"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"

@Module({
  controllers: [UsersController],
  providers: [UsersService, AppResolver]
})
export class UsersModule {}
