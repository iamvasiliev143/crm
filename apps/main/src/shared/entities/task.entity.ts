import { Entity, ManyToOne } from 'typeorm';

import { Task as CoreTask } from '@core/db/entities';

import { Trader } from './trader.entity';

@Entity()
export class Task extends CoreTask {
  @ManyToOne((type) => Trader, (trader) => trader.tasks, {
    onDelete: 'CASCADE',
  })
  trader!: Trader;
}
