import { Controller, Get, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { TranslationService } from '@core/shared/services';

@ApiTags('Translations')
@Controller('')
export class TranslationTraderController {
  constructor(protected readonly translationService: TranslationService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {}

  @Get('/:langCode')
  @ApiOperation({
    summary: 'Get Translation',
  })
  async getTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }
}

@ApiTags('Translations')
@Controller('')
export class TranslationAdminController {
  constructor(protected readonly translationService: TranslationService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {}

  @Get('/:langCode')
  @ApiOperation({
    summary: 'Get Translation',
  })
  async getTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }

  @Patch('/:langCode/update')
  @ApiOperation({
    summary: 'Update Translation',
  })
  async updateTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }
}
