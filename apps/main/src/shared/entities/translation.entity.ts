import { Entity, Column, OneToOne } from 'typeorm';

import { Language as LanguageCore } from '@core/shared/entities';

@Entity()
export class Translation {
  @OneToOne((type) => LanguageCore)
  language!: LanguageCore;

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
