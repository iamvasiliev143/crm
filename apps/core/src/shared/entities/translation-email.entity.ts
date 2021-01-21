import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Translation } from '@core/shared/entities';

@Entity()
export class TranslationEmail extends Translation {
  @PrimaryGeneratedColumn('uuid', { comment: 'Translation Email ID' })
  id!: string;
}
