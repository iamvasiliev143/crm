import { Entity, ManyToOne } from 'typeorm';

import { Task as TaskCore } from '@core/shared/entities';

import { Trader } from '@shared/entities';

@Entity()
export class Task extends TaskCore<Trader> {
  @ManyToOne(() => Trader, (trader) => trader.tasks)
  trader!: Trader;
}
