import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  LanguageService as CoreLanguageService,
  TranslationService as CoreTranslationService,
} from '@core/shared/services';

import { Language } from '@shared/entities';

@Injectable()
export class LanguageService extends CoreLanguageService {
  constructor(
    @InjectRepository(Language)
    protected readonly languageRepo: Repository<Language>,

    protected readonly translationService: CoreTranslationService,

    protected readonly adminTranslations: Object,
    protected readonly emailTranslations: Object,
    protected readonly traderTranslations: Object,
  ) {
    super(
      languageRepo,
      translationService,
      adminTranslations,
      emailTranslations,
      traderTranslations,
    );
  }
}
