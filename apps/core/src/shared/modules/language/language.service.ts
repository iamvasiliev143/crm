import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Language as CoreLanguage } from '@core/shared/entities';

import { LanguageDTO } from './dtos/language.dto';

export class LanguageService {
  public readonly logger = new Logger(LanguageService.name);

  constructor(
    @InjectRepository(CoreLanguage)
    protected readonly languageRepo: Repository<CoreLanguage>,
  ) {}

  async getLanguages(): Promise<CoreLanguage[]> {
    return await this.languageRepo.find();
  }

  async createLanguage(languageDTO: LanguageDTO): Promise<CoreLanguage> {
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
