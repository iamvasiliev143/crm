import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CoreTaskService } from '@core/services';

import { Task } from './task.entity';

@Injectable()
export class TaskService extends CoreTaskService {
  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,
  ) {
    super(taskRepo);
  }

  async createTask() {
    return await this.taskRepo.save({
      title: 'Test #2',
      description: 'Description!',
      createdAt: new Date(Date.now()),
    });
  }
}
