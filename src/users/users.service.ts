import { Injectable } from "@nestjs/common"
import { User } from ".prisma/client"
import { PrismaService } from "@/prisma/prisma.service"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  /**
   * 查询单个用户信息
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<User> {
    const user: User = <User>await this.prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })
    return Object.assign(user, { hash: "******" })
  }

  async editUser(user: User): Promise<User> {
    return user
  }
}
