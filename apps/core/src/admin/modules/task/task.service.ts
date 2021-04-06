import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaskDTO } from '@core/admin/dtos';
import { Task } from '@core/shared/entities';

export class TaskService {
  public readonly logger = new Logger(TaskService.name);

  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,
  ) {}

  async getAllTasks() {
    return await this.taskRepo.find({ relations: ['trader'] });
  }

  async createTask(taskDTO: TaskDTO) {
    return await this.taskRepo.save(taskDTO);
  }

  async getTask(taskID: string) {
    return await this.taskRepo.findOne({
      where: {
        id: taskID,
      },
      relations: ['trader'],
    });
  }

  async updateTask(taskID: string, taskDTO: TaskDTO) {
    return await this.taskRepo.save({
      id: taskID,
      ...taskDTO,
    });
  }
}
