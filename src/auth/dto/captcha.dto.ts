import { ApiProperty } from "@nestjs/swagger";

export class CaptchaDto {
  @ApiProperty({ description: "背景颜色" })
  background!: string;
  @ApiProperty({ description: "验证码要排除的字符" })
  ignoreChars!: string;
  @ApiProperty({ description: "验证码类型: 0是文字,1是算数" })
  type!: string;
  @ApiProperty({ description: "文字长度" })
  size!: string;
  @ApiProperty({ description: "是否有文字随机颜色" })
  color!: boolean;
}
