import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  LanguageTraderController as CoreLanguageTraderController,
  LanguageAdminController as CoreLanguageAdminController,
} from '@core/shared/controllers';

import { LanguageService } from './language.service';

@ApiTags('Languages')
@Controller('languages')
export class LanguageTraderController extends CoreLanguageTraderController {
  constructor(protected readonly languageService: LanguageService) {
    super(languageService);
  }
}

@ApiTags('Languages')
@Controller('languages')
export class LanguageAdminController extends CoreLanguageAdminController {
  constructor(protected readonly languageService: LanguageService) {
    super(languageService);
  }
}
