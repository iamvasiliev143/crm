import { Module } from '@nestjs/common';

import { DatabaseModule, TranslationAdminModule } from '@shared/modules';

import { TaskModule } from './modules/task/task.module';
import { TraderModule } from './modules/trader/trader.module';

@Module({
  imports: [DatabaseModule, TranslationAdminModule, TaskModule, TraderModule],
})
export class GlobalAdminModule {}
