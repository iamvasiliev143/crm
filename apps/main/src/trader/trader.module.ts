import { MiddlewareConsumer, Module } from '@nestjs/common';

import {
  DatabaseModule,
  LanguageTraderModule,
  TranslationTraderModule,
  AccountTypeModule,
} from '@shared/modules';

import { LoggerMiddleware } from '@shared/middlewares';

import { OpenAccountModule } from './modules/open-account/open-account.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,

    LanguageTraderModule,
    TranslationTraderModule,

    AccountTypeModule,
    OpenAccountModule,
    AuthModule,
  ],
})
export class GlobalTraderModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
  }
}