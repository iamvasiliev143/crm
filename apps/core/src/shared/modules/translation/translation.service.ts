import { Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { flatten, unflatten } from 'flat';
import { chain } from 'lodash';

import {
  TranslationAdmin as CoreTranslationAdmin,
  TranslationEmail as CoreTranslationEmail,
  TranslationTrader as CoreTranslationTrader,
} from '@core/shared/entities';

import { TranslationDTO } from './dtos/translation.dto';

import { TRADER_TRANSLATIONS } from '@core/shared/configs';

export class TranslationService {
  public readonly logger = new Logger(TranslationService.name);

  constructor(
    @InjectRepository(CoreTranslationAdmin)
    protected readonly tranalationAdminRepo: Repository<CoreTranslationAdmin>,

    @InjectRepository(CoreTranslationEmail)
    protected readonly tranalationEmailRepo: Repository<CoreTranslationEmail>,

    @InjectRepository(CoreTranslationTrader)
    protected readonly tranalationTraderRepo: Repository<CoreTranslationTrader>,

    @Inject('TRADER_TRANSLATIONS')
    protected readonly adminTranslations: Object,

    @Inject('TRADER_TRANSLATIONS')
    protected readonly emailTranslations: Object,

    @Inject('TRADER_TRANSLATIONS')
    protected readonly traderTranslations: Object,
  ) {
    this.prepareToDB(traderTranslations);
  }

  async getTranslationTrader(languageCode: string): Promise<any> {
    const translations = await this.tranalationTraderRepo.find({
      code: languageCode,
    });
    return this.prepareFromDB(translations);
  }

  async updateTranslationTrader(
    languageCode: string,
    translationDTO: TranslationDTO[],
  ) {
    translationDTO = translationDTO.filter(
      (item) => (item.code = languageCode),
    );

    return await this.tranalationTraderRepo.save(translationDTO);
  }

  prepareToDB(translations: {}) {
    const preparedTranslations: TranslationDTO[] = chain(
      flatten(translations) as {},
    )
      .map((value: string, key: string) => {
        return { key: key, translation: value };
      })
      .value();

    this.updateTranslationTrader('en', preparedTranslations);
  }

  prepareFromDB(translations: any = TRADER_TRANSLATIONS) {
    return unflatten(
      chain(translations)
        .keyBy('key')
        .mapValues((row) => row.translation)
        .value(),
    );
  }
}
