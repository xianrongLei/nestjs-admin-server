import { Controller, Get, Patch, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { User } from ".prisma/client"
import { UsersService } from "./users.service"
import { GetUser } from "../auth/decorator"

@Controller("users")
@UseGuards(AuthGuard("jwt"))
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    this.usersService = usersService
  }

  /**
   * 查询单个用户信息
   * @param id
   * @returns
   */
  @Get(":id")
  @ApiOperation({ summary: "查询单个用户信息" })
  findOne(@GetUser("id") userId: string) {
    return this.usersService.findOne(userId)
  }

  @Patch(":id")
  @ApiOperation({ summary: "编辑用户信息" })
  editUser(@GetUser() user: User) {
    return user
  }
}
