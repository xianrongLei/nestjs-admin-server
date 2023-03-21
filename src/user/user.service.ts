import { Prisma } from ".prisma/client"
import { PrismaService } from "@/common/prisma/prisma.service"
import { ForbiddenException, Injectable } from "@nestjs/common"
import { CreateUserInput } from "./dto/create-user.input"
import { UpdateUserInput } from "./dto/update-user.input"

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<CreateUserInput> {
    try {
      const data: CreateUserInput = await this.prisma.user.create({
        data: createUserInput
      })
      return data
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException(`${error?.meta?.target} should be unique`)
        }
      }
      throw error
    }
  }

  findAll() {
    return `This action returns all users`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
