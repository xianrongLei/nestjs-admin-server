import { JwtSignOptions } from "@nestjs/jwt";

export type Jwt = {
  defaultSecret: string;
  defaultDignOptions: JwtSignOptions;
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
export type Reids = {
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
  expriseIn: number;
};
export interface Config {
  jwt: Jwt;
  app: App;
  swagger: Swagger;
  databaseURL: string;
  redis: Reids;
  graphql: Graphql;
  captcha: captcha;
}
