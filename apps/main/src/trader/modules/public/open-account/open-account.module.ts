import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountType, Trader, Language } from '@shared/entities';

import { IsExist, IsUnique } from '@shared/helpers';

import { TaskSericeModule } from '@admin/modules';

import { TraderOpenAccountController } from './open-account.controller';
import { OpenAccountService } from './open-account.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountType, Trader, Language]),
    TaskSericeModule,
  ],

  controllers: [TraderOpenAccountController],

  providers: [OpenAccountService, IsUnique, IsExist],
})
export class OpenAccountModule {}
