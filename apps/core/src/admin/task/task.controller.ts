import { Controller, Logger, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

import { CoreTaskService } from '@core/admin/services';
import { TaskDTO } from '@core/admin/dtos';

@ApiTags('Tasks')
@Controller('tasks')
export class CoreTaskController {
  public readonly logger = new Logger(CoreTaskController.name);

  constructor(protected readonly taskService: CoreTaskService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Getting tasks',
  })
  @ApiQuery({ name: 'pageIndex', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Post('/create')
  @ApiOperation({
    summary: 'Creating task',
  })
  async createTask(@Body() taskDTO: TaskDTO) {
    return await this.taskService.createTask();
  }
}
