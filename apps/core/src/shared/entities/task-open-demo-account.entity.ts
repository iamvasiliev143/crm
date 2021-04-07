import { PrimaryGeneratedColumn } from 'typeorm';

export class TaskOpenDemoAccount {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;
}
