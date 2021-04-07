import { PrimaryGeneratedColumn, Column, Index, ManyToOne } from 'typeorm';
import { IsEmail, IsMobilePhone, IsDate } from 'class-validator';

import { MessengerTypeE } from '@core/shared/consts';

import { Language as CoreLanguage, Task } from '@core/shared/entities';

export class Trader<Language = CoreLanguage> {
  @PrimaryGeneratedColumn('uuid', { comment: 'Trader ID' })
  id!: string;

  @Column({ length: 64, nullable: false, comment: 'First Name' })
  firstName!: string;

  @Column({ length: 64, nullable: false, comment: 'Last Name' })
  lastName!: string;

  @Column({
    type: 'date',
    comment: 'Birth Date',
    default: '2020-12-12',
  })
  @IsDate()
  birthDate!: Date;

  @Column({ comment: 'Email' })
  @Index({ unique: true })
  @IsEmail()
  email!: string;

  @Column({ comment: 'Passowrd', select: false })
  password!: string;

  @Column({ length: 100, comment: 'Mobile Phone' })
  @IsMobilePhone()
  phone!: string;

  @Column({
    type: 'enum',
    enum: MessengerTypeE,
    nullable: true,
    comment: 'Messenger Type',
  })
  messengerType!: MessengerTypeE;

  @Column({ length: 64, nullable: true, comment: 'Messenger Account' })
  messengerAccount!: string;

  @Column({ length: 2, comment: 'Country' })
  country!: string;

  @Column({ comment: 'Province' })
  province!: string;

  @Column({ comment: 'City' })
  city!: string;

  @Column({ comment: 'ZIP' })
  zip!: number;

  @Column({ length: 100, comment: 'Leverage' })
  leverage!: string;

  @ManyToOne('Language', { eager: true })
  language!: Language;

  @Column({ comment: 'Timezone' })
  @IsDate()
  timezone!: string;

  tasks!: Task[];

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
