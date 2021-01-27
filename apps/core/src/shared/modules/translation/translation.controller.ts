import { Logger, Get, Patch, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';

import { TranslationService } from '@core/shared/services';

import { TranslationDTO } from './dtos/translation.dto';

export class TranslationTraderController {
  public readonly logger = new Logger(TranslationService.name);

  constructor(protected readonly translationService: TranslationService) {}

  @Get('/:languageCode')
  @ApiOperation({
    summary: 'Get Translation of Trader',
  })
  async getTranslation(@Param('languageCode') languageCode: string) {
    return await this.translationService.getTranslationTrader(languageCode);
  }
}

export class TranslationAdminController {
  constructor(protected readonly translationService: TranslationService) {}

  @Get('trader/:languageCode')
  @ApiOperation({
    summary: 'Get Translation of Trader',
  })
  async getTranslation(@Param('languageCode') languageCode: string) {
    return await this.translationService.getTranslationTrader(languageCode);
  }

  @Patch('trader/:languageCode')
  @ApiOperation({
    summary: 'Update Translation of Trader',
  })
  @ApiBody({ type: [TranslationDTO] })
  async updateTranslation(
    @Param('languageCode') languageCode: string,
    @Body() translationDTO: TranslationDTO[],
  ) {
    return await this.translationService.updateTranslationTrader(
      languageCode,
      translationDTO,
    );
  }
}
