import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class AuthDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email?: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password?: string
}
