import { Module } from '@nestjs/common';

import { DatabaseModule, LanguageAdminModule, TranslationAdminModule } from '@shared/modules';

import { TaskModule } from './modules/task/task.module';
import { TraderModule } from './modules/trader/trader.module';

@Module({
  imports: [DatabaseModule, LanguageAdminModule, TranslationAdminModule, TaskModule, TraderModule],
})
export class GlobalAdminModule {}
