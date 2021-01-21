import { Entity, Column, OneToOne, OneToMany } from 'typeorm';

import {
  Trader as TraderCore,
  Language as LanguageCore,
} from '@core/shared/entities';

import { Task } from '@shared/entities';

@Entity()
export class Trader extends TraderCore {
  @Column({ length: 100, comment: 'Leverage' })
  leverage!: string;

  @OneToOne((type) => LanguageCore, { onDelete: 'CASCADE' })
  language?: LanguageCore;

  @OneToMany((type) => Task, (task) => task.trader, { onDelete: 'CASCADE' })
  tasks?: Task[];
}
