import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Language } from '@core/shared/entities';

import {
  TranslationAdmin,
  TranslationEmail,
  TranslationTrader,
} from '@shared/entities';

import {
  TranslationTraderController,
  TranslationAdminController,
} from './translation.controller';
import { TranslationService } from './translation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Language,
      TranslationAdmin,
      TranslationEmail,
      TranslationTrader,
    ]),
  ],

  controllers: [TranslationTraderController],
  providers: [TranslationService],

  exports: [TypeOrmModule],
})
export class TranslationTraderModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Language,
      TranslationAdmin,
      TranslationEmail,
      TranslationTrader,
    ]),
  ],

  controllers: [TranslationAdminController],
  providers: [TranslationService],

  exports: [TypeOrmModule],
})
export class TranslationAdminModule {}
