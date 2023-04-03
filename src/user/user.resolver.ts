import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { UsersService } from "./user.service"
import { CreateUserInput } from "./dto/create-user.input.dto"
import { UpdateUserInput } from "./dto/update-user.input.dto"
import { OrderByParams } from "@/types/graphql"

@Resolver("user")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation("createUser")
  create(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query("users")
  findAll(
    @Args("orderBy")
    orderBy?: OrderByParams
  ) {
    return this.usersService.findAll(orderBy)
  }

  @Query("user")
  findOne(@Args("id") id: number) {
    return this.usersService.findOne(id)
  }

  @Mutation("updateUser")
  update(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation("removeUser")
  remove(@Args("id") id: number) {
    return this.usersService.remove(id)
  }
}
