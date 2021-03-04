import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TranslationService as CoreTranslationService } from '@core/shared/services';

import {
  TranslationAdmin,
  TranslationEmail,
  TranslationTrader,
} from '@shared/entities';

@Injectable()
export class TranslationService extends CoreTranslationService {
  constructor(
    @InjectRepository(TranslationAdmin)
    protected readonly tranalationAdminRepo: Repository<TranslationAdmin>,

    @InjectRepository(TranslationEmail)
    protected readonly tranalationEmailRepo: Repository<TranslationEmail>,

    @InjectRepository(TranslationTrader)
    protected readonly tranalationTraderRepo: Repository<TranslationTrader>,

    protected readonly adminTranslations: Object,
    protected readonly emailTranslations: Object,
    protected readonly traderTranslations: Object,
  ) {
    super(
      tranalationAdminRepo,
      tranalationEmailRepo,
      tranalationTraderRepo,
      adminTranslations,
      emailTranslations,
      traderTranslations,
    );
  }
}
