import { Test, TestingModule } from "@nestjs/testing"
import { UsersResolver } from "./user.resolver"
import { UsersService } from "./user.service"

describe("UsersResolver", () => {
  let resolver: UsersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService]
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
  })

  it("should be defined", () => {
    expect(resolver).toBeDefined()
  })
})
