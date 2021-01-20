import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config/config';

import { TaskModule } from './task/task.module';
import { TraderModule } from './trader/trader.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.MYSQL_HOST,
      port: config.MYSQL_PORT,
      username: config.MYSQL_USER,
      password: config.MYSQL_PASSWORD,
      database: config.MYSQL_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
    }),

    TaskModule,
    TraderModule,
  ],
})
export class AppModule {}
