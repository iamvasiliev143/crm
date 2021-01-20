import { config } from 'dotenv';
import { resolve } from 'path';

const paths = __dirname.split('/');
const project = paths[paths.length - 1];

config({ path: resolve('apps', project, `.env`) });

export const CONFIG = {
  APP_PORT: process.env.ADMIN_PORT || 3000,

  MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.1',
  MYSQL_PORT: parseInt(process.env.MYSQL_PORT!, 10) || 3306,
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'root',

  API_ADMIN_PREFIX: process.env.API_ADMIN_PREFIX || 'api/admin',
  API_TRADER_PREFIX: process.env.API_TRADER_PREFIX || 'api/trader',

  SWAGGER_ADMIN_PREFIX: process.env.SWAGGER_ADMIN_PREFIX || 'api/doc/admin',
  SWAGGER_ADMIN_TITLE: process.env.SWAGGER_ADMIN_PREFIX || 'The Blue Lagoon: Admin',
  SWAGGER_ADMIN_DESCRIPTION: process.env.SWAGGER_ADMIN_DESCRIPTION || 'Admin API description',
  SWAGGER_ADMIN_VERSION: process.env.SWAGGER_ADMIN_VERSION || '1.0',

  SWAGGER_TRADER_PREFIX: process.env.SWAGGER_TRADER_PREFIX || 'api/doc/trader',
  SWAGGER_TRADER_TITLE: process.env.SWAGGER_ADMIN_PREFIX || 'The Blue Lagoon: Trader',
  SWAGGER_TRADER_DESCRIPTION: process.env.SWAGGER_ADMIN_DESCRIPTION || 'Trader API description',
  SWAGGER_TRADER_VERSION: process.env.SWAGGER_ADMIN_VERSION || '1.0',
};