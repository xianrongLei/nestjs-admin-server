import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "./user.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { QueryUserInput } from "./dto/query-user-input";

@Resolver("user")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
    this.usersService = usersService;
  }

  @Mutation("createUser")
  create(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query("users")
  findAll(@Args("queryUserInput") queryUserInput: QueryUserInput) {
    return this.usersService.findAll(queryUserInput);
  }

  @Query("user")
  findOne(@Args("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation("updateUser")
  update(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation("removeUser")
  remove(@Args("id") id: string) {
    return this.usersService.remove(id);
  }
}
