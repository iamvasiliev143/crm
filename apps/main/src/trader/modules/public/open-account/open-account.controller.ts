import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { OpenAccountController as CoreOpenAccountController } from '@core/trader/controllers';
import { OpenAccountService } from './open-account.service';

import {
  TraderOpenTradingAccountDTO,
  TraderOpenDemoAccountDTO,
} from '@trader/dtos';

@ApiTags('Open Account')
@Controller('open-account')
export class TraderOpenAccountController extends CoreOpenAccountController {
  constructor(protected readonly openAccountService: OpenAccountService) {
    super(openAccountService);
  }

  @Post('/trading')
  @ApiOperation({
    summary: 'Open Trading Account',
  })
  async openTradingAccount(@Body() traderDTO: TraderOpenTradingAccountDTO) {
    return await this.openAccountService.openTradingAccount(traderDTO);
  }

  @Post('/demo')
  @ApiOperation({
    summary: 'Open Demo Account',
  })
  async openDemoAccount(@Body() traderDTO: TraderOpenDemoAccountDTO) {
    return await this.openAccountService.openTradingAccount(traderDTO);
  }
}
