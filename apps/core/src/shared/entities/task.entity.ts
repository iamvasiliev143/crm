import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDate } from 'class-validator';

import { Trader as CoreTrader } from '@core/shared/entities';

export class Task<
  Trader = undefined extends CoreTrader<infer T> | undefined
    ? T | undefined
    : never
> {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;

  @Column({ length: 128, comment: 'Title' })
  title!: string;

  @Column('text', { comment: 'Description' })
  description!: string;

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
