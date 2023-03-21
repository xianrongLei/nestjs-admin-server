import { Test, TestingModule } from "@nestjs/testing"
import { MenusResolver } from "./menus.resolver"
import { MenusService } from "./menus.service"

describe("MenusResolver", () => {
  let resolver: MenusResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusResolver, MenusService]
    }).compile()

    resolver = module.get<MenusResolver>(MenusResolver)
  })

  it("should be defined", () => {
    expect(resolver).toBeDefined()
  })
})
