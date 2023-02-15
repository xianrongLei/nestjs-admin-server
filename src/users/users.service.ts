import { ForbiddenException, Injectable } from "@nestjs/common"
import { Prisma, User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

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
    try {
      const user: User | null = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: Number(id)
        }
      })
      return Object.assign(user, { hash: "******" })
    } catch (error: unknown) {
      if (error instanceof Prisma.NotFoundError) {
        throw new ForbiddenException("用户不存在！")
      } else {
        throw error
      }
    }
  }

  async editUser(user: User): Promise<User> {
    return user
  }
}
