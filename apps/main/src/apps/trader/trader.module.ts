import { Module } from '@nestjs/common';

import { DatabaseModule } from '../shared/database.module';

@Module({
  imports: [DatabaseModule],
})
export class GlobalTraderModule {}
