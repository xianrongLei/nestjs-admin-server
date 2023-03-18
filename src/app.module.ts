import { CacheModule, Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { PrismaModule } from "./prisma/prisma.module"
import { PrismaService } from "./prisma/prisma.service"
import { redisStore } from "cache-manager-redis-store"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import config from "./common/configs/config"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"
import { OrgansModule } from "./organs/organs.module"
import { MenusModule } from "./menus/menus.module"
import { RolesModule } from "./roles/roles.module"
import { PostsModule } from "./posts/posts.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      cache: true,
      isGlobal: true,
      load: [config]
    }),
    PrismaModule,
    CacheModule.register({
      isGlobal: true,
      store: <any>redisStore,
      useFactory: function (configService: ConfigService) {
        return {
          socket: {
            host: configService.get("redis.ip"),
            port: configService.get("redis.port")
          }
        }
      }
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        playground: configService.get("graphql.playground"),
        typePaths: ["./**/*.graphql"],
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        definitions: {
          path: join(process.cwd(), "src/types/graphql.ts"),
          outputAs: "interface"
        }
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UsersModule,
    OrgansModule,
    MenusModule,
    RolesModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
