import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { User } from "@/types/graphql"

export class CreateUserInput implements User {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username!: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password!: string
}
