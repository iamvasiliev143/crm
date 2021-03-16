import { Logger, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { LanguageService } from '@core/shared/services';

import { LanguageDTO } from '@core/shared/dtos';

export class LanguageTraderController {
  public readonly logger = new Logger(LanguageTraderController.name);

  constructor(protected readonly languageService: LanguageService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {
    return await this.languageService.getLanguages();
  }
}

export class LanguageAdminController {
  constructor(protected readonly languageService: LanguageService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {
    return await this.languageService.getLanguages();
  }

  @Post('/')
  @ApiOperation({
    summary: 'Create Language',
  })
  async createLanguage(@Body() languageDTO: LanguageDTO) {
    return this.languageService.createLanguage(languageDTO);
  }

  @Patch('/')
  @ApiOperation({
    summary: 'Update Language',
  })
  async updateLanguage(@Body() languageDTO: LanguageDTO) {
    await this.languageService.updateLanguage(languageDTO);
  }

  @Delete('/:languageCode')
  @ApiOperation({
    summary: 'Delete Language',
  })
  async deleteLanguage(@Param('languageCode') languageCode: string) {
    await this.languageService.deleteLanguage(languageCode);
  }
}
