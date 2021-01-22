import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  TranslationAdminController as CoreTranslationAdminController,
  TranslationTraderController as CoreTranslationTraderController,
} from '@core/shared/controllers';

import { TranslationService } from './translation.service';

@ApiTags('Translations')
@Controller('translations')
export class TranslationTraderController extends CoreTranslationTraderController {
  constructor(protected readonly translationService: TranslationService) {
    super(translationService);
  }
}

@ApiTags('Translations')
@Controller('translations')
export class TranslationAdminController extends CoreTranslationAdminController {
  constructor(protected readonly translationService: TranslationService) {
    super(translationService);
  }
}
