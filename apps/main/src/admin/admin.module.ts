import { Module } from '@nestjs/common';

import {
  DatabaseModule,
  LanguageAdminModule,
  TranslationAdminModule,
  AccountTypeModule as SharedAccountTypeModule,
} from '@shared/modules';
import { AccountTypeModule } from './modules/account-type/account-type.module';

import { TaskModule } from './modules/task/task.module';
import { TraderModule } from './modules/trader/trader.module';

@Module({
  imports: [
    DatabaseModule,

    LanguageAdminModule,
    TranslationAdminModule,

    SharedAccountTypeModule,
    AccountTypeModule,

    TaskModule,
    TraderModule,
  ],
})
export class GlobalAdminModule {}
