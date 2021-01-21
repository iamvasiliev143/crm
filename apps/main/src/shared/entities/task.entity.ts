import { Entity, ManyToOne } from 'typeorm';

import { Task as TaskCore } from '@core/shared/entities';

import { Trader } from '@shared/entities';

@Entity()
export class Task extends TaskCore {
  @ManyToOne((type) => Trader, (trader) => trader.tasks, {
    onDelete: 'CASCADE',
  })
  trader!: Trader;
}
