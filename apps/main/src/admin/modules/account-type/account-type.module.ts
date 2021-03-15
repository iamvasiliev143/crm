import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountType } from '@shared/entities';

import { AccountTypeService } from './account-type.service';

import { AccountTypeController } from './account-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountType])],

  controllers: [AccountTypeController],
  
  providers: [AccountTypeService],

  exports: [TypeOrmModule]
})
export class AccountTypeModule {}
