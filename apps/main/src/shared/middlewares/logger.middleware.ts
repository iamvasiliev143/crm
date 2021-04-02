import { Injectable, NestMiddleware } from '@nestjs/common';

import { LoggerMiddleware as CoreLoggerMiddleware } from '@core/shared/middlewares';

@Injectable()
export class LoggerMiddleware
  extends CoreLoggerMiddleware
  implements NestMiddleware {}
