import { Module } from '@nestjs/common';

import { TaskSericeModule } from './task-service.module';
import { TaskController } from './task.controller';

@Module({
  imports: [TaskSericeModule],
  controllers: [TaskController],
})
export class TaskModule {}
