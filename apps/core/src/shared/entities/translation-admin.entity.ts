import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Translation } from '@core/shared/entities';

@Entity()
export class TranslationAdmin extends Translation {
  @PrimaryGeneratedColumn('uuid', { comment: 'Translation Admin ID' })
  id!: string;
}
