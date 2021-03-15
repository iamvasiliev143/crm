import { Logger, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { TraderOpenTradingAccountDTO } from '@core/trader/dtos';

export class OpenAccountController {
  public readonly logger = new Logger(OpenAccountController.name);

  @Post('/trading')
  @ApiOperation({
    summary: 'Open Trading Account',
  })
  async openTradingAccount(@Body() openAccount: TraderOpenTradingAccountDTO) {}

  @Post('/demo')
  @ApiOperation({
    summary: 'Open Demo Account',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TraderOpenTradingAccountDTO,
  })
  async openDemoAccount(@Body() openAccount: TraderOpenTradingAccountDTO) {}
}
