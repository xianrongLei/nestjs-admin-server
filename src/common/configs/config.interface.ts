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
  path: string
}
export type Reids = {
  ip: string
  port: number
}
export type Graphql = {
  outputAs: "interface" | "class"
  playground: boolean
  playgroundEnabled?: boolean
  debug?: boolean
  schemaDestination?: string
  sortSchema?: boolean
  typePaths: string[]
  path: string
}
export interface Config {
  jwt: Jwt
  app: App
  swagger: Swagger
  databaseURL: string
  redis: Reids
  graphql: Graphql
}
