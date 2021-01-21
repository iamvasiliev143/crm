import { Entity, Column } from 'typeorm';

@Entity()
export class Translation {
  @Column({ comment: 'Language Code', length: 2 })
  code!: string;

  @Column('text', { comment: 'Key' })
  key!: string;

  @Column('text', { comment: 'Translation' })
  translation!: string;

  @Column({ type: 'datetime', comment: 'Created At' })
  createdAt!: Date;

  @Column({ type: 'datetime', comment: 'Updated At' })
  updatedAt!: Date;
}
