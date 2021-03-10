import { Module } from '@nestjs/common';

import {
  DatabaseModule,
  LanguageTraderModule,
  TranslationTraderModule,

  AccountTypeModule
} from '@shared/modules';

import { OpenAccountModule } from './modules/open-account/open-account.module';

@Module({
  imports: [
    DatabaseModule,
    
    LanguageTraderModule,
    TranslationTraderModule,

    AccountTypeModule,
    OpenAccountModule,
  ],
})
export class GlobalTraderModule {}
