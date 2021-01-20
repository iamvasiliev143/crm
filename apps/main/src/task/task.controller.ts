import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CoreTaskController } from '@core/controllers';

import { TaskService } from './task.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController extends CoreTaskController {
  constructor(protected readonly taskService: TaskService) {
    super(taskService);
  }
}
