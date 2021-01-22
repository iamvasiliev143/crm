import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Trader as CoreTrader } from '@core/shared/entities';

export class Task<Trader = (undefined extends CoreTrader<infer T> | undefined ? T | undefined : never)> {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;

  @Column({ length: 128, comment: 'Title' })
  title!: string;

  @Column('text', { comment: 'Description' })
  description!: string;

  @Column({ type: 'datetime', comment: 'Created At' })
  createdAt!: Date;

  @ManyToOne('Trader', 'id', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  trader?: Trader;
}
