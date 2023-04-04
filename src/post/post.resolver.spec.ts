import { Test, TestingModule } from "@nestjs/testing";
import { PostsResolver } from "./post.resolver";
import { PostsService } from "./post.service";

describe("PostsResolver", () => {
  let resolver: PostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsResolver, PostsService]
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
