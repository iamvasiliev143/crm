import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Language } from '@shared/entities';

import {
  LanguageTraderController,
  LanguageAdminController,
} from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],

  controllers: [LanguageTraderController],
  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageTraderModule {}

@Module({
  imports: [TypeOrmModule.forFeature([Language])],

  controllers: [LanguageAdminController],
  providers: [LanguageService],

  exports: [TypeOrmModule],
})
export class LanguageAdminModule {}
