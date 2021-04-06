import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CONFIG } from '@shared/configs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: CONFIG.MYSQL_HOST,
      port: CONFIG.MYSQL_PORT,
      username: CONFIG.MYSQL_USER,
      password: CONFIG.MYSQL_PASSWORD,
      database: CONFIG.MYSQL_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive: true,
      timezone: '+03:00',
      logging: true,
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}
