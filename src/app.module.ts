import { CacheModule, Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { BookmarkModule } from "./bookmark/bookmark.module"
import { PrismaModule } from "./prisma/prisma.module"
import { PrismaService } from "./prisma/prisma.service"
import { UsersModule } from "./users/users.module"
import { redisStore } from "cache-manager-redis-store"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AppResolver } from "./app.resolver"
import config from "./common/configs/config"

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [config]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    CacheModule.register({
      isGlobal: true,
      store: <any>redisStore,
      useFactory: function (configService: ConfigService) {
        return {
          socket: {
            host: configService.get("REDIS_IP"),
            port: configService.get("REDIS_PORT")
          }
        }
      }
    }),
    AuthModule,
    BookmarkModule,
    PrismaModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AppResolver]
})
export class AppModule {}
