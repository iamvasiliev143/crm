import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { Task as TaskCore } from '@core/shared/entities';
import {
  Trader,
  TaskOpenTradingAccount,
  TaskOpenDemoAccount,
} from '@shared/entities';

@Entity()
export class Task extends TaskCore {
  @ManyToOne(() => Trader, (trader) => trader.tasks, { onDelete: 'CASCADE' })
  trader!: Trader;

  @OneToOne(() => TaskOpenTradingAccount)
  @JoinColumn()
  openTradingAccount!: TaskOpenTradingAccount;

  @OneToOne(() => TaskOpenDemoAccount)
  @JoinColumn()
  openDemoAccount!: TaskOpenDemoAccount;
}
