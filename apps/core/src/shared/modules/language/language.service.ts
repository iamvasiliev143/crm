import { Logger, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TranslationService } from '@core/shared/services';

import { Language } from '@core/shared/entities';
import { LanguageDTO } from '@core/shared/dtos';

export class LanguageService {
  public readonly logger = new Logger(LanguageService.name);

  constructor(
    @InjectRepository(Language)
    protected readonly languageRepo: Repository<Language>,

    protected readonly translationService: TranslationService,

    @Inject('ADMIN_TRANSLATIONS')
    protected readonly adminTranslations: Object,

    @Inject('EMAIL_TRANSLATIONS')
    protected readonly emailTranslations: Object,

    @Inject('TRADER_TRANSLATIONS')
    protected readonly traderTranslations: Object,
  ) {}

  async getLanguages(): Promise<Language[]> {
    return await this.languageRepo.find();
  }

  async createLanguage(languageDTO: LanguageDTO): Promise<Language> {
    this.translationService.prepareToDB(
      languageDTO.code,
      this.traderTranslations,
    );
    return await this.languageRepo.save(languageDTO);
  }

  async updateLanguage(languageDTO: LanguageDTO): Promise<void> {
    await this.languageRepo.update({ code: languageDTO.code }, languageDTO);
  }

  async deleteLanguage(languageCode: string): Promise<void> {
    await this.languageRepo.delete({ code: languageCode });
  }
}
