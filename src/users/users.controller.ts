import { Body, Controller, Post } from "@nestjs/common"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("findOne")
  find(@Body() a: any) {
    return this.usersService.findOne(a)
  }
}
