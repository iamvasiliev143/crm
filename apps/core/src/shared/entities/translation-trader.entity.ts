import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Translation } from '@core/shared/entities';

@Entity()
export class TranslationTrader extends Translation {
  @PrimaryGeneratedColumn('uuid', { comment: 'Translation Trader ID' })
  id!: string;
}
