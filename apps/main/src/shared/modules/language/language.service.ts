import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LanguageService as CoreLanguageService } from '@core/shared/services';
import { Language as CoreLanguage } from '@core/shared/entities';

@Injectable()
export class LanguageService extends CoreLanguageService {
  constructor(
    @InjectRepository(CoreLanguage)
    protected readonly languageRepo: Repository<CoreLanguage>,
  ) {
    super(languageRepo);
  }
}
