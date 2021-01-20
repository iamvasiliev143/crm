import { Module } from '@nestjs/common';

import { TraderOpenAccountController } from './open-account.controller';

@Module({
  controllers: [TraderOpenAccountController],
})
export class OpenAccountModule {}
