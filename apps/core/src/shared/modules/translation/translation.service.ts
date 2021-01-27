import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  TranslationAdmin as CoreTranslationAdmin,
  TranslationEmail as CoreTranslationEmail,
  TranslationTrader as CoreTranslationTrader,
} from '@core/shared/entities';

import { TranslationDTO } from './dtos/translation.dto';

export class TranslationService {
  public readonly logger = new Logger(TranslationService.name);

  constructor(
    @InjectRepository(CoreTranslationAdmin)
    protected readonly tranalationAdminRepo: Repository<CoreTranslationAdmin>,

    @InjectRepository(CoreTranslationEmail)
    protected readonly tranalationEmailRepo: Repository<CoreTranslationEmail>,

    @InjectRepository(CoreTranslationTrader)
    protected readonly tranalationTraderRepo: Repository<CoreTranslationTrader>,
  ) {}

  async getTranslationTrader(
    languageCode: string,
  ): Promise<CoreTranslationTrader[]> {
    return await this.tranalationTraderRepo.find({ code: languageCode });
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
}
