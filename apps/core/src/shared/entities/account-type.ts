import { PrimaryGeneratedColumn, Column } from 'typeorm';

import { AccountTypeE } from '@core/shared/consts';

export class AccountType {
  @PrimaryGeneratedColumn('uuid', { comment: 'Account Type ID' })
  id!: string;

  @Column({ type: 'text', comment: 'Title of Account Type' })
  title!: string;

  @Column({
    type: 'enum',
    enum: AccountTypeE,
    default: AccountTypeE.demo,
    comment: 'Type of Account Type',
  })
  type!: AccountTypeE;

  @Column({ type: 'text', comment: 'Curreny of Account Type' })
  currency!: string;
}
