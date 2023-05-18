import { PrismaService } from "@/common/prisma/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { User } from ".prisma/client";
import { Strategy } from "passport-local";
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(configService: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("jwt.secret"),
      signOptions: configService.get("jwt.signOptions")
    });
    this.prisma = prisma;
  }

  async validate(payload: { id: string; username: string }): Promise<User> {
    const user: User | null = await this.prisma.user.findUnique({
      where: {
        id: payload.id
      }
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
