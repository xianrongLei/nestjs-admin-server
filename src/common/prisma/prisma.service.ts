import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from ".prisma/client";
// import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient {
  docitEnrty: any;
  constructor(configService: ConfigService) {
    super({
      datasources: {
        db: {
          // url: "file:./dev_qa.db"
          url: configService.get("databaseURL")
        }
      }
    });
  }
}
