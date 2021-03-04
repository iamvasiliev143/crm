import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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

import {
  ADMIN_TRANSLATIONS,
  EMAIL_TRANSLATIONS,
  TRADER_TRANSLATIONS,
} from '@shared/configs';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TranslationAdmin,
      TranslationEmail,
      TranslationTrader,
    ]),
  ],

  controllers: [TranslationTraderController],

  providers: [
    TranslationService,
    {
      provide: 'ADMIN_TRANSLATIONS',
      useValue: ADMIN_TRANSLATIONS,
    },
    {
      provide: 'EMAIL_TRANSLATIONS',
      useValue: EMAIL_TRANSLATIONS,
    },
    {
      provide: 'TRADER_TRANSLATIONS',
      useValue: TRADER_TRANSLATIONS,
    },
  ],

  exports: [
    TypeOrmModule,
    TranslationService,
    {
      provide: 'ADMIN_TRANSLATIONS',
      useValue: ADMIN_TRANSLATIONS,
    },
    {
      provide: 'EMAIL_TRANSLATIONS',
      useValue: EMAIL_TRANSLATIONS,
    },
    {
      provide: 'TRADER_TRANSLATIONS',
      useValue: TRADER_TRANSLATIONS,
    },
  ],
})
export class TranslationTraderModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TranslationAdmin,
      TranslationEmail,
      TranslationTrader,
    ]),
  ],

  controllers: [TranslationAdminController],

  providers: [
    TranslationService,
    {
      provide: 'ADMIN_TRANSLATIONS',
      useValue: ADMIN_TRANSLATIONS,
    },
    {
      provide: 'EMAIL_TRANSLATIONS',
      useValue: EMAIL_TRANSLATIONS,
    },
    {
      provide: 'TRADER_TRANSLATIONS',
      useValue: TRADER_TRANSLATIONS,
    },
  ],

  exports: [
    TypeOrmModule,
    TranslationService,
    {
      provide: 'ADMIN_TRANSLATIONS',
      useValue: ADMIN_TRANSLATIONS,
    },
    {
      provide: 'EMAIL_TRANSLATIONS',
      useValue: EMAIL_TRANSLATIONS,
    },
    {
      provide: 'TRADER_TRANSLATIONS',
      useValue: TRADER_TRANSLATIONS,
    },
  ],
})
export class TranslationAdminModule {}
