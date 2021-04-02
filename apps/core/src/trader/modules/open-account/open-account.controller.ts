import { Logger, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { OpenAccountService } from '@core/trader/services';
import { TraderOpenTradingAccountDTO, TraderOpenDemoAccountDTO } from '@core/trader/dtos';

export class OpenAccountController {
  public readonly logger = new Logger(OpenAccountController.name);

  constructor(protected readonly openAccountService: OpenAccountService) {}

  @Post('/trading')
  @ApiOperation({
    summary: 'Open Trading Account',
  })
  async openTradingAccount(@Body() trader: TraderOpenTradingAccountDTO) {
    return await this.openAccountService.openTradingAccount(trader);
  }

  @Post('/demo')
  @ApiOperation({
    summary: 'Open Demo Account',
  })
  async openDemoAccount(@Body() trader: TraderOpenDemoAccountDTO) {
    return await this.openAccountService.openTradingAccount(trader);
  }
}
