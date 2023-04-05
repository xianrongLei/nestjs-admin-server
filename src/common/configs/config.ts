import { join } from "path";
import type { Config } from "./config.interface";

export default function (): Config {
  return {
    jwt: {
      secret: "jwt_secret",
      signOptions: { expiresIn: "60s" }
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
      description: "my poject",
      path: "api"
    },
    redis: {
      ip: "redis",
      port: 6379
    },
    databaseURL: process.env.DATABASE_URL as string
  };
}
