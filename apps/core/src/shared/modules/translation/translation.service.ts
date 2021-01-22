import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  TranslationAdmin as CoreTranslationAdmin,
  TranslationEmail as CoreTranslationEmail,
  TranslationTrader as CoreTranslationTrader,
} from '@core/shared/entities';

export class TranslationService {
  constructor(
    @InjectRepository(CoreTranslationAdmin)
    protected readonly tranalationAdminRepo: Repository<CoreTranslationAdmin>,

    @InjectRepository(CoreTranslationEmail)
    protected readonly tranalationEmailRepo: Repository<CoreTranslationEmail>,

    @InjectRepository(CoreTranslationTrader)
    protected readonly tranalationTraderRepo: Repository<CoreTranslationTrader>,
  ) {}
}
