import { config } from 'dotenv';
import { resolve } from 'path';

const paths = __dirname.split('/');
const project = paths[paths.length - 1];

config({ path: resolve('apps', project, `.env`) });

export default {
  APP_PORT: process.env.APP_PORT || 3000,

  MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.1',
  MYSQL_PORT: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'root',
};
