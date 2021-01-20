import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const swagerConfigs = new DocumentBuilder()
    .setTitle('The Blue Lagoon')
    .setDescription('The Blue Lagoon API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swagerConfigs);
  SwaggerModule.setup('doc', app, document);

  await app.listen(config.APP_PORT);
}
bootstrap();
