import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsBoolean } from 'class-validator';

@Entity()
export class Language {
  @PrimaryColumn({ comment: 'Language Code' })
  code!: string;

  @Column('text', { comment: 'Title of the Language' })
  title!: string;

  @Column({ type: 'boolean', comment: 'If the Language is Public' })
  @IsBoolean()
  public!: boolean;

  @Column({ type: 'boolean', comment: 'If the Language is Default and Public' })
  @IsBoolean()
  default!: boolean;
}
