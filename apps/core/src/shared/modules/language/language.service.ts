import { Logger, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Language as CoreLanguage } from '@core/shared/entities';

import { LanguageDTO } from './dtos/language.dto';
import { TranslationService } from '../translation/translation.service';

export class LanguageService {
  public readonly logger = new Logger(LanguageService.name);

  constructor(
    @InjectRepository(CoreLanguage)
    protected readonly languageRepo: Repository<CoreLanguage>,

    protected readonly translationService: TranslationService,

    @Inject('ADMIN_TRANSLATIONS')
    protected readonly adminTranslations: Object,

    @Inject('EMAIL_TRANSLATIONS')
    protected readonly emailTranslations: Object,

    @Inject('TRADER_TRANSLATIONS')
    protected readonly traderTranslations: Object,
  ) {}

  async getLanguages(): Promise<CoreLanguage[]> {
    return await this.languageRepo.find();
  }

  async createLanguage(languageDTO: LanguageDTO): Promise<CoreLanguage> {
    this.translationService.prepareToDB('ru', this.traderTranslations);
    return await this.languageRepo.save(languageDTO);
  }

  async updateLanguage(
    languageCode: string,
    languageDTO: LanguageDTO,
  ): Promise<void> {
    await this.languageRepo.update({ code: languageCode }, languageDTO);
  }

  async deleteLanguage(languageCode: string): Promise<void> {
    await this.languageRepo.delete({ code: languageCode });
  }
}
