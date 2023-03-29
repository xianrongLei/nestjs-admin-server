import { Prisma, User } from ".prisma/client"
import { PrismaService } from "@/common/prisma/prisma.service"
import { ForbiddenException, Injectable } from "@nestjs/common"
import * as argon from "argon2"
import { CreateUserInput } from "./dto/create-user.input.dto"
import { UpdateUserInput } from "./dto/update-user.input.dto"

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma
  }
  /**
   * 创建用户
   * @param createUserInput 
   * @returns 
   */
  async create(createUserInput: CreateUserInput): Promise<any> {
    try {
      const password: string = await argon.hash(createUserInput.password)
      return await this.prisma.user.create({
        data: {
          ...createUserInput,
          password
        }
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2002") {
          throw new ForbiddenException(`${error?.meta?.target} should be unique`)
        }
      }
      throw error
    }
  }
  /**
   * 查询所有用户
   * @returns 
   */
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number): Promise<User> {
    return <User>await this.prisma.user.findFirst({
      where: {
        id
      }
    })
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    console.log(updateUserInput)

    return await this.prisma.user.update({
      where: {
        id
      },
      data: updateUserInput
    })
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
