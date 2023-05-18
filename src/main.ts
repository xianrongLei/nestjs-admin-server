import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { App } from "./common/configs/config.interface";
async function bootstrap(): Promise<void> {
  //创建服务
  const app = await NestFactory.create(AppModule, { cors: true });
  const appConfig: ConfigService = app.get(ConfigService);
  // 设置跨域
  app.enableCors({
    credentials: true
  });
  //挂载swagger
  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(appConfig.get("swagger.title") as string)
    .setDescription(appConfig.get("swagger.description") as string)
    .setVersion(appConfig.get("swagger.version") as string)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(appConfig.get("swagger.path") as string, app, document);
  //全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  // 开启服务
  await app.listen(<number>appConfig.get<App>("app")?.port);
  console.log("服务已启动, 端口:" + appConfig.get<App>("app")?.port);
}

bootstrap();
