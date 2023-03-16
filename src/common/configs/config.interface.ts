import { JwtSignOptions } from "@nestjs/jwt"

export type Jwt = {
  secret: string
  signOptions: JwtSignOptions
}
export type App = {
  port: number
  prefix: string
}
export type Swagger = {
  title: string
  version: string
  description: string
}
export interface Config {
  jwt: Jwt
  app: App
  swagger: Swagger
}
