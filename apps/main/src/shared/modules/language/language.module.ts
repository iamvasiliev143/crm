import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Language } from '@shared/entities';

import { TranslationAdminModule } from '../translation/translation.module';

import {
  LanguageTraderController,
  LanguageAdminController,
} from './language.controller';

import { LanguageService } from './language.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language]), TranslationAdminModule],

  controllers: [LanguageTraderController],

  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageTraderModule {}

@Module({
  imports: [TypeOrmModule.forFeature([Language]), TranslationAdminModule],

  controllers: [LanguageAdminController],

  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageAdminModule {}
