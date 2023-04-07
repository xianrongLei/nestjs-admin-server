import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [
    // JwtModule.register({})
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get("jwt.defaultSecret"),
        signOptions: configService.get("jwt.defaultDignOptions")
      })
    })
  ],
  providers: [AuthService, JwtStrategy, AuthResolver]
})
export class AuthModule {}
