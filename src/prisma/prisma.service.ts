import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
// import { PrismaClient } from '../../node_modules/.prisma/client'
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          // postgresql://${DB_USER}:${DB_PASSWORD}@${DB_IP}:${DB_PORT}/${DB_NAME}?schema=public
          url: config.get("DATABASE_URL")
        }
      }
    })
  }
}
