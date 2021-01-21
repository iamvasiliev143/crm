import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CoreOpenAccountController } from '@core/trader/controllers';

@ApiTags('Open Account')
@Controller('')
export class TraderOpenAccountController extends CoreOpenAccountController {}
