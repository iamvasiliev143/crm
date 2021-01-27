import { Module } from '@nestjs/common';

import {
  DatabaseModule,
  LanguageTraderModule,
  TranslationTraderModule,
} from '@shared/modules';

import { OpenAccountModule } from './modules/open-account/open-account.module';

@Module({
  imports: [
    DatabaseModule,
    LanguageTraderModule,
    TranslationTraderModule,
    OpenAccountModule,
  ],
})
export class GlobalTraderModule {}
