import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaskService as CoreTaskService } from '@core/admin/services';

import {
  Task,
  TaskOpenDemoAccount,
  TaskOpenTradingAccount,
} from '@shared/entities';

@Injectable()
export class TaskService extends CoreTaskService {
  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,

    @InjectRepository(TaskOpenTradingAccount)
    protected readonly taskOpenTradingAccountRepo: Repository<TaskOpenTradingAccount>,

    @InjectRepository(TaskOpenDemoAccount)
    protected readonly taskOpenDemoAccountRepo: Repository<TaskOpenDemoAccount>,

  ) {
    super(taskRepo, taskOpenTradingAccountRepo, taskOpenDemoAccountRepo);
  }
}
