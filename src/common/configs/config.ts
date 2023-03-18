import type { Config } from "./config.interface"
const config: Config = {
  jwt: {
    secret: "jwt_secret",
    signOptions: { expiresIn: "60s" }
  },
  graphql: {
    playground: false
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
  databaseURL: <string>process.env.DATABASE_URL
}
export default (): Config => config
