import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsMobilePhone, IsDate } from 'class-validator';

// import { Task } from '../task/task.entity';

@Entity()
export class Trader {
  constructor(firstName: string, lastName: string) {
    this.fullName = firstName + '' + lastName;
  }

  @PrimaryGeneratedColumn('uuid', { comment: 'Trader ID' })
  id: string;

  @Column({ comment: 'First Name', length: 128, nullable: false })
  firstName: string;

  @Column({ comment: 'First Name', length: 128, nullable: false })
  lastName: string;

  fullName: string;

  @Column({ comment: 'Birth Date', type: 'datetime' })
  @IsDate()
  birthDate: Date;

  @Column({ comment: 'Email', length: 254 })
  @IsEmail()
  email: string;

  @Column({ comment: 'Passowrd' })
  password: string;

  @Column({ comment: 'Mobile Phone', length: 100 })
  @IsMobilePhone()
  phone: string;

  @Column({ comment: 'Skype', length: 100, nullable: true, default: null })
  skype: string;

  // @OneToMany(type => Task, task => task.trader)
  // tasks: Task[];
}
