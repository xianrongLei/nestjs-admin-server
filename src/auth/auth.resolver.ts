import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { CreateCaptchaInput } from "@/types/graphql";

@Resolver("auth")
export class AuthResolver {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @Mutation("captcha")
  captcha(@Args("createCaptchaInput") createCaptchaInput: CreateCaptchaInput) {
    return this.authService.captcha(createCaptchaInput);
  }

  @Mutation("signup")
  signup() {
    return this.authService.signup();
  }

  @Mutation("signin")
  signin() {
    return this.authService.signin();
  }
}
