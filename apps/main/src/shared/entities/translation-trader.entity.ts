import { Entity } from 'typeorm';

import { TranslationTrader as TranslationTraderCore } from '@core/shared/entities';

@Entity()
export class TranslationTrader extends TranslationTraderCore {}
