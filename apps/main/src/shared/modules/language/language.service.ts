import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LanguageService as CoreLanguageService } from '@core/shared/services';

import { Language } from '@shared/entities';

@Injectable()
export class LanguageService extends CoreLanguageService {
  constructor(
    @InjectRepository(Language)
    protected readonly languageRepo: Repository<Language>,
  ) {
    super(languageRepo);
  }
}
