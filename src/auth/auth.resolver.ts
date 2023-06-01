import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { CreateCaptchaInput } from "./dto/create-captcha.input";
import { SignInInput } from "./dto/sign-in.input";
import { SignUpInput } from "./dto/sign-up.input";

@Resolver("auth")
export class AuthResolver {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @Mutation("captcha")
  captcha(@Args("createCaptchaInput") createCaptchaInput: CreateCaptchaInput) {
    return this.authService.captcha(createCaptchaInput);
  }

  @Mutation("signUp")
  signUp(@Args("signUpInput") signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }

  @Mutation("signIn")
  signIn(@Args("signInInput") signInInput: SignInInput) {
    return this.authService.signIn(signInInput);
  }
}
