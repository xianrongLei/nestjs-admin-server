import { Body, Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async findOne(@Body() a: any): Promise<User | undefined> {
    const user = await this.prisma.user.findFirst({
      where: { email: a.email }
    })
    return user
  }
}
