import {
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

export class AccountType {
  @PrimaryGeneratedColumn('uuid', { comment: 'Account Type ID' })
  id!: string;

  @Column({ type: 'text', comment: 'Name of Account Type' })
  name!: string;

  @Column({ type: 'text', comment: 'Type of Account Type' })
  type!: string;

  @Column({ type: 'text', comment: 'Curreny of Account Type' })
  currency!: string;
}
