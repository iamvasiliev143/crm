import { Entity, Column } from 'typeorm';

import { Task as CoreTask } from '@core/entities';

@Entity()
export class Task extends CoreTask {
  @Column({ type: 'datetime', nullable: true, default: null })
  createdAt: Date;
}
