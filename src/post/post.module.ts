import { Module } from "@nestjs/common"
import { PostsService } from "./post.service"
import { PostsResolver } from "./post.resolver"

@Module({
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
