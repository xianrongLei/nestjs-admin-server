import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UsersFindOneDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id!: string
}
