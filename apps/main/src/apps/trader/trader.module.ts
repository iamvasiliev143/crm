import { Module } from '@nestjs/common';

import { DatabaseModule } from '@shared/modules';

import { OpenAccountModule } from './open-account/open-account.module';

@Module({
  imports: [DatabaseModule, OpenAccountModule],
})
export class GlobalTraderModule {}
