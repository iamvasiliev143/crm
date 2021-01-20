import { Controller } from '@nestjs/common';

import { CoreTaskController } from '@core/controllers';

import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController extends CoreTaskController {
  constructor(protected readonly taskService: TaskService) {
    super(taskService);
  }
}
