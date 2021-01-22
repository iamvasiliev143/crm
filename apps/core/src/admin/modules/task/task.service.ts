import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task, Trader } from '@core/shared/entities';

export class TaskService {
  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,
  ) {}

  async getAllTasks() {
    return await this.taskRepo.find();
  }
}
