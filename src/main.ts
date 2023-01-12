import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

async function bootstrap(): Promise<any> {
  //创建服务
  const app = await NestFactory.create(AppModule, { cors: true })
  const appConfig: ConfigService = app.get<ConfigService>(ConfigService)
  app.setGlobalPrefix("v1")
  // 设置跨域
  app.enableCors({
    credentials: true
  })

  //挂载swagger
  const swaggerConfig = new DocumentBuilder().setTitle("标题").setDescription("说明").setVersion("版本1.0").build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("api", app, document)

  //全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  // 开启服务
  await app.listen(<number>appConfig.get("APP_PORT"))
  console.log("服务已启动，端口:" + appConfig.get("APP_PORT"))
}

void bootstrap()
