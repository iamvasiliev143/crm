import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task as CoreTask } from '@core/db/entities';

@Injectable()
export class CoreTaskService {
  constructor(
    @InjectRepository(CoreTask)
    protected readonly taskRepo: Repository<CoreTask>,
  ) {}

  async getAllTasks() {
    return await this.taskRepo.find();
  }
}
