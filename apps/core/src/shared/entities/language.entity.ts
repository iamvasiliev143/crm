import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsBoolean } from 'class-validator';

@Entity()
export class Language {
  @PrimaryGeneratedColumn('uuid', { comment: 'Language ID' })
  id!: string;

  @Column({ length: 2, comment: 'Language Code' })
  code!: string;

  @Column('text', { comment: 'Name of the Language' })
  name!: string;

  @Column({ type: 'boolean', comment: 'If the Language is Public' })
  @IsBoolean()
  public!: boolean;

  @Column({ type: 'boolean', comment: 'If the Language is Default and Public' })
  @IsBoolean()
  default!: boolean;

  @Column({ type: 'datetime', comment: 'Created At' })
  createdAt!: Date;

  @Column({ type: 'datetime', comment: 'Updated At' })
  updatedAt!: Date;
}
