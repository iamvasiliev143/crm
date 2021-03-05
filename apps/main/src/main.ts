import express from 'express';

import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { GlobalAdminModule } from './admin/admin.module';
import { GlobalTraderModule } from './trader/trader.module';

import { CONFIG } from '@shared/configs';

async function bootstrap() {
  const server = express();
  const adapter = new ExpressAdapter(server);

  const admin = await NestFactory.create(GlobalAdminModule, adapter);
  const trader = await NestFactory.create(GlobalTraderModule, adapter);

  admin.setGlobalPrefix(CONFIG.API_ADMIN_PREFIX);
  trader.setGlobalPrefix(CONFIG.API_TRADER_PREFIX);

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
    .setTitle(CONFIG.SWAGGER_ADMIN_TITLE)
    .setDescription(CONFIG.SWAGGER_ADMIN_DESCRIPTION)
    .setVersion(CONFIG.SWAGGER_ADMIN_VERSION)
    .build();

  const traderSwaggerConfigs = new DocumentBuilder()
    .setTitle(CONFIG.SWAGGER_TRADER_TITLE)
    .setDescription(CONFIG.SWAGGER_TRADER_DESCRIPTION)
    .setVersion(CONFIG.SWAGGER_TRADER_VERSION)
    .build();

  const adminSwaggerDocument = SwaggerModule.createDocument(
    admin,
    adminSwaggerConfigs,
  );
  const traderSwaggerDocument = SwaggerModule.createDocument(
    trader,
    traderSwaggerConfigs,
  );

  SwaggerModule.setup(CONFIG.SWAGGER_ADMIN_PREFIX,
    admin,
    adminSwaggerDocument
  );
  SwaggerModule.setup(
    CONFIG.SWAGGER_TRADER_PREFIX,
    trader,
    traderSwaggerDocument,
  );

  await admin.init();
  await trader.init();

  await adapter.listen(CONFIG.APP_PORT);
}
bootstrap();
