import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ from 'lodash';

import { TaskDTO } from '@core/admin/dtos';
import {
  Task,
  TaskOpenTradingAccount,
  TaskOpenDemoAccount,
} from '@core/shared/entities';
import { TaskTypeE } from '@core/shared/consts';

export class TaskService {
  public readonly logger = new Logger(TaskService.name);

  constructor(
    @InjectRepository(Task)
    protected readonly taskRepo: Repository<Task>,

    @InjectRepository(TaskOpenTradingAccount)
    protected readonly taskOpenTradingAccountRepo: Repository<TaskOpenTradingAccount>,
    
    @InjectRepository(TaskOpenDemoAccount)
    protected readonly taskOpenDemoAccountRepo: Repository<TaskOpenDemoAccount>,
  ) {}

  async getAllTasks(
    pageIndex: number = 0,
    pageSize: number = 15,
    createdAtOrder: 'ASC' | 'DESC' = 'DESC',
  ) {
    const tasks = await this.taskRepo.find({
      relations: ['trader', 'openDemoAccount', 'openTradingAccount'],

      skip: pageIndex,
      take: pageSize,

      order: {
        createdAt: createdAtOrder,
      },
    });

    return tasks;
  }

  async createTask(taskDTO: TaskDTO) {
    const task = await this.taskRepo.save({
      ...taskDTO,
    });

    return {
      ...task,
    };
  }

  async createTaskOpenTradingAccount(taskDTO: TaskDTO) {
    const taskOpenTradingAccount = await this.taskOpenTradingAccountRepo.save({
      ...taskDTO.openTradingAccount,
    });

    const task = await this.taskRepo.save({
      ...taskDTO,
      openTradingAccount: taskOpenTradingAccount,
    });

    return task;
  }

  async createTaskOpenDemoAccount(taskDTO: TaskDTO) {
    const taskOpenDemoAccount = await this.taskOpenDemoAccountRepo.save({
      ...taskDTO.openDemoAccount,
    });

    const task = await this.taskRepo.save({
      ...taskDTO,
      openDemoAccount: taskOpenDemoAccount,
    });

    return task;
  }

  async getTask(taskID: string) {
    const task = await this.taskRepo.findOne({
      where: {
        id: taskID,
      },
      relations: ['trader'],
    });

    return task;
  }

  async updateTask(taskID: string, taskDTO: TaskDTO) {
    const task = await this.taskRepo.save({
      id: taskID,
      ...taskDTO,
    });

    return task;
  }
}
