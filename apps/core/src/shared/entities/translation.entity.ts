import { PrimaryColumn, Column } from 'typeorm';

export class Translation {
  @Column({ comment: 'Language Code' })
  code!: string;

  @PrimaryColumn({ comment: 'Key' })
  key!: string;

  @Column('text', { comment: 'Translation' })
  translation!: string;
}
