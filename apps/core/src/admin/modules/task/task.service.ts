import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from '@core/shared/entities';

export class TaskService {
  public readonly logger = new Logger(TaskService.name);

  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,
  ) {}

  async getAllTasks() {
    return await this.taskRepo.find();
  }
}
