import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthDto } from "./dto/auth.dto"
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { CaptchaDto } from "./dto/captcha.dto"

@ApiBearerAuth()
@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService
  }
  @Get("captcha")
  @HttpCode(HttpStatus.OK)
  captcha(@Req() req: { query: CaptchaDto }) {
    return this.authService.captcha(req.query)
  }

  @Post("signup")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "注册" })
  @ApiResponse({ status: 403, description: "邮箱已被注册" })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto)
  }

  @Post("signin")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "登录" })
  @ApiResponse({ status: 403, description: "认证失败" })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto)
  }
}
