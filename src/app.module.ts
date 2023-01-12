import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { BookmarkModule } from "./bookmark/bookmark.module"
import { PrismaModule } from "./prisma/prisma.module"
import { PrismaService } from "./prisma/prisma.service"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    BookmarkModule,
    PrismaModule,
    UsersModule
  ],
  providers: [PrismaService]
})
export class AppModule {}
