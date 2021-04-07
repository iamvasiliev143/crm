import { Logger, Get, Post, Patch, Body, Param, Query } from '@nestjs/common';
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
  @ApiQuery({ name: 'createdAtOrder', required: false, enum: ['ASC', 'DESC'] })
  async getAllTasks(
    @Query('pageIndex') pageIndex: number,
    @Query('pageSize') pageSize: number,
    @Query('createdAtOrder') createdAtOrder: 'ASC' | 'DESC',
  ) {
    return await this.taskService.getAllTasks(
      pageIndex,
      pageSize,
      createdAtOrder,
    );
  }

  @Post('/task')
  @ApiOperation({
    summary: 'Create task',
  })
  async createTask(@Body() taskDTO: TaskDTO) {
    return await this.taskService.createTask(taskDTO);
  }

  @Get('/task/:taskID')
  @ApiOperation({
    summary: 'Get task',
  })
  async getTask(@Param('taskID') taskID: string) {
    return await this.taskService.getTask(taskID);
  }

  @Patch('/task/:taskID')
  @ApiOperation({
    summary: 'Update task',
  })
  async updateTask(@Param('taskID') taskID: string, @Body() taskDTO: TaskDTO) {
    return await this.taskService.updateTask(taskID, taskDTO);
  }
}
