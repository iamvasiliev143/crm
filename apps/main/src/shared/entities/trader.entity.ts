import { Entity, OneToMany } from 'typeorm';

import { Trader as CoreTrader } from '@core/db/entities';

import { Task } from './task.entity';

@Entity()
export class Trader extends CoreTrader {
  @OneToMany((type) => Task, (task) => task.trader, { onDelete: 'CASCADE' })
  tasks?: Task[];
}
