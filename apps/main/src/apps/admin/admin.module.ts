import { Module } from '@nestjs/common';

import { DatabaseModule } from '@shared/modules';

import { TaskModule } from './modules/task/task.module';
import { TraderModule } from './modules/trader/trader.module';

@Module({
  imports: [DatabaseModule, TaskModule, TraderModule],
})
export class GlobalAdminModule {}
