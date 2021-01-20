import { Module } from '@nestjs/common';

import { DatabaseModule } from '@shared/modules';

@Module({
  imports: [DatabaseModule],
})
export class GlobalTraderModule {}
