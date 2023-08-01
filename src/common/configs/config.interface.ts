import type { JwtSignOptions } from "@nestjs/jwt";

export type Jwt = {
  defaultSecret: string;
  defaultSignOptions: JwtSignOptions;
  secret: string;
  signOptions: JwtSignOptions;
  refExpiresIn: String;
};
export type App = {
  port: number;
  prefix: string;
};
export type Swagger = {
  title: string;
  version: string;
  description: string;
  path: string;
};
export type Redis = {
  ip: string;
  port: number;
};
export type Graphql = {
  outputAs: "interface" | "class";
  playground: boolean;
  playgroundEnabled?: boolean;
  debug?: boolean;
  schemaDestination?: string;
  sortSchema?: boolean;
  typePaths: string[];
  path: string;
};

export type captcha = {
  expiresIn: number;
};
export interface Config {
  jwt: Jwt;
  app: App;
  swagger: Swagger;
  databaseURL: string;
  redis: Redis;
  graphql: Graphql;
  captcha: captcha;
}
