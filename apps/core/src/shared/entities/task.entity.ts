import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDate } from 'class-validator';

import {
  Trader,
  TaskOpenDemoAccount,
  TaskOpenTradingAccount,
} from '@core/shared/entities';
import { TaskStatusE, TaskTypeE } from '@core/shared/consts';

export class Task {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;

  @Column({
    type: 'enum',
    enum: TaskStatusE,
    comment: 'Task Status',
    default: TaskStatusE.new,
  })
  status!: TaskStatusE;

  @Column({
    type: 'enum',
    enum: TaskTypeE,
    comment: 'Task Type',
    default: TaskTypeE.custom,
  })
  type!: TaskTypeE;

  trader!: Trader;

  openDemoAccount!: TaskOpenDemoAccount;

  openTradingAccount!: TaskOpenTradingAccount;

  @Column({
    type: 'datetime',
    nullable: false,
    readonly: true,
    comment: 'Created At',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @IsDate()
  createdAt!: Date;
}
