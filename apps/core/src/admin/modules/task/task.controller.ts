import {
  Controller,
  Logger,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

import { TaskService } from '@core/admin/services';
import { TaskDTO } from '@core/admin/dtos';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  public readonly logger = new Logger(TaskController.name);

  constructor(protected readonly taskService: TaskService) {}

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
  async createTask(@Body() taskDTO: TaskDTO) {}
}
