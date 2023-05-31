import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PostsService } from "./post.service";
import { CreatePostInput } from "./dto/create-post.input";
import { UpdatePostInput } from "./dto/update-post.input";
import { QueryPostInput } from "./dto/query-post.input";

@Resolver("Post")
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation("createPost")
  create(@Args("createPostInput") createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query("posts")
  findAll(@Args("queryPostInput") queryPostInput: QueryPostInput) {
    return this.postsService.findAll(queryPostInput);
  }

  @Query("post")
  findOne(@Args("id") id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation("updatePost")
  update(@Args("updatePostInput") updatePostInput: UpdatePostInput) {
    return this.postsService.update(updatePostInput);
  }

  @Mutation("removePost")
  remove(@Args("id") id: string) {
    return this.postsService.remove(id);
  }
}
