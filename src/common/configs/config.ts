import { join } from "path";
import type { Config } from "./config.interface";

export default function (): Config {
  return {
    captcha: {
      expiresIn: 5 * 60
    },
    jwt: {
      defaultSecret: "secret",
      defaultSignOptions: { expiresIn: "60s" },
      secret: "jwt_secret",
      signOptions: { expiresIn: "60s" },
      refExpiresIn: "30d"
    },
    graphql: {
      playground: false,
      outputAs: "interface",
      path: join(process.cwd(), "src/types/graphql.ts"),
      typePaths: ["./**/*.graphql"]
    },
    app: {
      port: 3000,
      prefix: "v1"
    },
    swagger: {
      title: "my-admin",
      version: "version 1.0",
      description: "my project",
      path: "api"
    },
    redis: {
      ip: "redis",
      port: 6379
    },
    databaseURL: process.env.DATABASE_URL as string
  };
}
