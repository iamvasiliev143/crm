import express from "express";

import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { GlobalAdminModule } from './apps/admin/admin.module';
import { GlobalTraderModule } from './apps/trader/trader.module';

import config from './config';

async function bootstrap() {
  const server = express();
  const adapter = new ExpressAdapter(server);

  const admin = await NestFactory.create(GlobalAdminModule, adapter);
  const trader = await NestFactory.create(GlobalTraderModule, adapter);

  admin.setGlobalPrefix('admin');
  trader.setGlobalPrefix('trader');

  admin.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );

  trader.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );

  const adminSwaggerConfigs = new DocumentBuilder()
    .setTitle('The Blue Lagoon: Admin')
    .setDescription('Admin API description')
    .setVersion('1.0')
    .build();

  const traderSwaggerConfigs = new DocumentBuilder()
    .setTitle('The Blue Lagoon: Trader')
    .setDescription('Trader API description')
    .setVersion('1.0')
    .build();

  const adminSwaggerDocument = SwaggerModule.createDocument(admin, adminSwaggerConfigs);
  const traderSwaggerDocument = SwaggerModule.createDocument(trader, traderSwaggerConfigs);

  SwaggerModule.setup('admin/doc', admin, adminSwaggerDocument);
  SwaggerModule.setup('trader/doc', trader, traderSwaggerDocument);

  await admin.init();
  await trader.init();

  await adapter.listen(config.APP_PORT);
}
bootstrap();
