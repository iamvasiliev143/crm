import { Entity, OneToMany } from 'typeorm';

import { Trader as CoreTrader } from '@core/entities';

import { Task } from '../task/task.entity';

@Entity()
export class Trader extends CoreTrader {
  @OneToMany((type) => Task, (task) => task.trader, { onDelete: 'CASCADE' })
  tasks?: Task[];
}
