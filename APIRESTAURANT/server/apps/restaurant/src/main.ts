/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT;
  app.enableCors();
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: ${process.env.HOSTLOCAL}${port}/${globalPrefix}`
  );
}

bootstrap();
