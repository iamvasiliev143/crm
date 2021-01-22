import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Language as CoreLanguage } from '@core/shared/entities';

import {
  LanguageTraderController,
  LanguageAdminController,
} from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CoreLanguage,
    ]),
  ],

  controllers: [LanguageTraderController],
  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageTraderModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CoreLanguage,
    ]),
  ],

  controllers: [LanguageAdminController],
  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageAdminModule {}