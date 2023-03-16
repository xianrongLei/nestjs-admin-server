import type { Config } from "./config.interface"
const config: Config = {
  jwt: {
    secret: "jwt_secret",
    signOptions: { expiresIn: "60s" }
  },
  app: {
    port: 3000,
    prefix: "v1"
  },
  swagger: {
    title: "my-admin",
    version: "version 1.0",
    description: "my poject"
  }
  // nest: {
  //   port: 3000
  // },
  // cors: {
  //   enabled: true
  // },
  // swagger: {
  //   enabled: true,
  //   title: "Nestjs FTW",
  //   description: "The nestjs API description",
  //   version: "1.5",
  //   path: "api"
  // },
  // graphql: {
  //   playgroundEnabled: true,
  //   debug: true,
  //   schemaDestination: "./src/schema.graphql",
  //   sortSchema: true
  // },
  // security: {
  //   expiresIn: "2m",
  //   refreshIn: "7d",
  //   bcryptSaltOrRound: 10
  // }
}
export default (): Config => config
