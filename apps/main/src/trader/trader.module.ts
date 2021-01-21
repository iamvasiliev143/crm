import { Module } from '@nestjs/common';

import { DatabaseModule, TranslationTraderModule } from '@shared/modules';

import { OpenAccountModule } from './modules/open-account/open-account.module';

@Module({
  imports: [DatabaseModule, TranslationTraderModule, OpenAccountModule],
})
export class GlobalTraderModule {}
