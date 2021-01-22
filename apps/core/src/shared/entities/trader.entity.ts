import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsEmail, IsMobilePhone, IsDate } from 'class-validator';

import { Task as CoreTask } from '@core/shared/entities';

/**
 * TODO: fix dependent circulation on generic
 */

@Entity()
export class Trader<Task extends CoreTask = CoreTask> {
  @PrimaryGeneratedColumn('uuid', { comment: 'Trader ID' })
  id!: string;

  @Column({ length: 128, nullable: false, comment: 'First Name' })
  firstName!: string;

  @Column({ length: 128, nullable: false, comment: 'Last Name' })
  lastName!: string;

  @Column({ type: 'datetime', comment: 'Birth Date' })
  @IsDate()
  birthDate!: Date;

  @Column({ length: 254, comment: 'Email' })
  @IsEmail()
  email!: string;

  @Column({ comment: 'Passowrd' })
  password!: string;

  @Column({ length: 100, comment: 'Mobile Phone' })
  @IsMobilePhone()
  phone!: string;

  @Column({ length: 100, nullable: true, default: null, comment: 'Skype' })
  skype!: string;

  @Column({ length: 100, comment: 'Country' })
  country!: string;

  @Column({ length: 100, comment: 'Province' })
  province!: string;

  @Column({ length: 100, comment: 'City' })
  city!: string;

  @Column({ comment: 'ZIP' })
  zip!: number;

  @OneToMany('Task', 'id', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  tasks?: Task[];
}
