import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Trader } from '@shared/entities';

import { TraderController } from './trader.controller';
import { TraderService } from './trader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trader])],
  controllers: [TraderController],
  providers: [TraderService],
})
export class TraderModule {}
