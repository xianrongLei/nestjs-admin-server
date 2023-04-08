import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { CreateCaptchaInput } from "./dto/create-captcha.input.dto";
import { CreateAuthInput } from "./dto/create-auth.input.dto";

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
  signup(@Args("createAuthInput") createAuthInput: CreateAuthInput) {
    return this.authService.signup(createAuthInput);
  }

  @Mutation("signin")
  signin(@Args("createAuthInput") createAuthInput: CreateAuthInput) {
    return this.authService.signin(createAuthInput);
  }
}
