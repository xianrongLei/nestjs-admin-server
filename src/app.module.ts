import type { CacheStore } from "@nestjs/common";
import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./common/prisma/prisma.module";
import { PrismaService } from "./common/prisma/prisma.service";
import { redisStore } from "cache-manager-redis-store";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./user/user.module";
import config from "./common/configs/config";
import { GraphQLModule } from "@nestjs/graphql";
import type { ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloDriver } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { OrgansModule } from "./organ/organ.module";
import { MenusModule } from "./menu/menu.module";
import { RolesModule } from "./role/role.module";
import { PostsModule } from "./post/post.module";
import { DepartmentModule } from "./department/department.module";
import { DictionaryModule } from "./dictionary/dictionary.module";
import { DictEntryModule } from "./dict-entry/dict-entry.module";

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
      store: redisStore as CacheStore,
      useFactory: function (configService: ConfigService) {
        return {
          socket: {
            host: configService.get("redis.ip"),
            port: configService.get("redis.port")
          }
        };
      }
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        playground: configService.get("graphql.playground"),
        typePaths: configService.get("graphql.typePaths"),
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        definitions: {
          path: configService.get("graphql.path"),
          outputAs: configService.get("graphql.outputAs")
        }
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UsersModule,
    OrgansModule,
    MenusModule,
    RolesModule,
    PostsModule,
    DepartmentModule,
    DictionaryModule,
    DictEntryModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
