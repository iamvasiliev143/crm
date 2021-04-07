import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Task,
  TaskOpenTradingAccount,
  TaskOpenDemoAccount,
} from '@shared/entities';

import { TaskService } from './task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Task,
      TaskOpenTradingAccount,
      TaskOpenDemoAccount,
    ]),
  ],
  providers: [TaskService],
  exports: [TypeOrmModule, TaskService],
})
export class TaskSericeModule {}
