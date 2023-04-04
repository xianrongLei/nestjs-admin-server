import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersResolver } from "./user.resolver";

@Module({
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
