import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Language as CoreLanguage } from '@core/shared/entities';

export class LanguageService {
  constructor(
    @InjectRepository(CoreLanguage)
    protected readonly languageRepo: Repository<CoreLanguage>,
  ) {
  }
}
