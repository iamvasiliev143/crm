import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TranslationService as CoreTranslationService } from '@core/shared/services';

import {
  TranslationAdmin as CoreTranslationAdmin,
  TranslationEmail as CoreTranslationEmail,
  TranslationTrader as CoreTranslationTrader,
} from '@shared/entities';

@Injectable()
export class TranslationService extends CoreTranslationService {
  constructor(
    @InjectRepository(CoreTranslationAdmin)
    protected readonly tranalationAdminRepo: Repository<CoreTranslationAdmin>,

    @InjectRepository(CoreTranslationEmail)
    protected readonly tranalationEmailRepo: Repository<CoreTranslationEmail>,

    @InjectRepository(CoreTranslationTrader)
    protected readonly tranalationTraderRepo: Repository<CoreTranslationTrader>,
  ) {
    super(tranalationAdminRepo, tranalationEmailRepo, tranalationTraderRepo);
  }
}
