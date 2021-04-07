import { Entity, OneToMany } from 'typeorm';

import { Trader as TraderCore } from '@core/shared/entities';

import { Task, Language } from '@shared/entities';

@Entity()
export class Trader extends TraderCore<Language> {
  @OneToMany(() => Task, (task) => task.trader)
  tasks!: Task[];
}
