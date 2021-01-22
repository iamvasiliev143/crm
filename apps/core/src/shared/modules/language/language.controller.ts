import { Get, Patch, Delete, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { LanguageService } from './language.service';

export class LanguageTraderController {
  constructor(protected readonly languageService: LanguageService) {
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {
  }
}

export class LanguageAdminController {
  constructor(protected readonly languageService: LanguageService) {
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get Languages',
  })
  async getLanguages() {
  }

  @Patch('/:langCode')
  @ApiOperation({
    summary: 'Update Language',
  })
  async updateLanguage(@Param('langCode') langCode: string) {
    return langCode;
  }

  @Delete('/:langCode')
  @ApiOperation({
    summary: 'Delete Language',
  })
  async deleteLanguage(@Param('langCode') langCode: string) {
    return langCode;
  }
}