import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from '@core/shared/entities';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,
  ) {}

  async getAllTasks() {
    return await this.taskRepo.find();
  }
}
