import { Get, Patch, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { TranslationService } from '@core/shared/services';

export class TranslationTraderController {
  constructor(protected readonly translationService: TranslationService) {}

  @Get('/:langCode')
  @ApiOperation({
    summary: 'Get Translation',
  })
  async getTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }
}

export class TranslationAdminController {
  constructor(protected readonly translationService: TranslationService) {}

  @Get('/:langCode')
  @ApiOperation({
    summary: 'Get Translation',
  })
  async getTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }

  @Patch('/:langCode')
  @ApiOperation({
    summary: 'Update Translation',
  })
  @ApiCreatedResponse({
    description: undefined,
    type: undefined,
  })
  async updateTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }

  @Delete('/:langCode')
  @ApiOperation({
    summary: 'Delete Translation',
  })
  async deleteTranslation(@Param('langCode') langCode: string) {
    return langCode;
  }
}
