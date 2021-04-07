import { PrimaryGeneratedColumn } from 'typeorm';

export class TaskOpenTradingAccount {
  @PrimaryGeneratedColumn('uuid', { comment: 'Task ID' })
  id!: string;
}
