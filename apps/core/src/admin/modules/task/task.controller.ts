import { Logger, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

import { TaskService } from '@core/admin/services';
import { TaskDTO } from '@core/admin/dtos';

export class TaskController {
  public readonly logger = new Logger(TaskController.name);

  constructor(protected readonly taskService: TaskService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get tasks',
  })
  @ApiQuery({ name: 'pageIndex', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Post('/task')
  @ApiOperation({
    summary: 'Create task',
  })
  async createTask(@Body() taskDTO: TaskDTO) {}

  @Get('/task/:taskID')
  @ApiOperation({
    summary: 'Get task',
  })
  async getTask(@Param('taskID') taskID: string) {}

  @Patch('/task/:taskID')
  @ApiOperation({
    summary: 'Update task',
  })
  async updateTask(@Param('taskID') taskID: string, @Body() taskDTO: TaskDTO) {}
}
