import { Controller, Get } from '@nestjs/common';

import { CoreTaskService } from './task.service';

@Controller('tasks')
export class CoreTaskController {
  constructor(protected readonly taskService: CoreTaskService) {}

  @Get('/')
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Get('/create')
  async createTask() {
    return await this.taskService.createTask();
  }
}
