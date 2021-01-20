import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsMobilePhone, IsDate } from 'class-validator';

@Entity()
export class Trader {
  @PrimaryGeneratedColumn('uuid', { comment: 'Trader ID' })
  id!: string;

  @Column({ comment: 'First Name', length: 128, nullable: false })
  firstName!: string;

  @Column({ comment: 'First Name', length: 128, nullable: false })
  lastName!: string;

  @Column({ comment: 'Birth Date', type: 'datetime' })
  @IsDate()
  birthDate!: Date;

  @Column({ comment: 'Email', length: 254 })
  @IsEmail()
  email!: string;

  @Column({ comment: 'Passowrd' })
  password!: string;

  @Column({ comment: 'Mobile Phone', length: 100 })
  @IsMobilePhone()
  phone!: string;

  @Column({ comment: 'Skype', length: 100, nullable: true, default: null })
  skype!: string;
}
