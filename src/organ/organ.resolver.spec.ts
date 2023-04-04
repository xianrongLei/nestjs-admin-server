import { Test, TestingModule } from "@nestjs/testing";
import { OrgansResolver } from "./organ.resolver";
import { OrgansService } from "./organ.service";

describe("OrgansResolver", () => {
  let resolver: OrgansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgansResolver, OrgansService]
    }).compile();

    resolver = module.get<OrgansResolver>(OrgansResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
