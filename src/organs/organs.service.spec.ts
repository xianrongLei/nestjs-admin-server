import { Test, TestingModule } from "@nestjs/testing"
import { OrgansService } from "./organs.service"

describe("OrgansService", () => {
  let service: OrgansService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgansService]
    }).compile()

    service = module.get<OrgansService>(OrgansService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
