import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthDto } from "./dto"
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

@ApiBearerAuth()
@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
