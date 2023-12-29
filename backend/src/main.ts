import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adicionando versionamento na url da api e definindo a v1 como default para todas as rotas
  app.setGlobalPrefix('api/v1');
  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   defaultVersion: '1',
  // });
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
