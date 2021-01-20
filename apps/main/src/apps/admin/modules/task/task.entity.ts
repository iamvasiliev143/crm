import { Entity, ManyToOne } from 'typeorm';

import { Task as CoreTask } from '@core/admin/entities';

import { Trader } from '../trader/trader.entity';

@Entity()
export class Task extends CoreTask {
  @ManyToOne((type) => Trader, (trader) => trader.tasks, {
    onDelete: 'CASCADE',
  })
  trader!: Trader;
}
