import { Logger, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { TraderOpenLiveAccountDTO } from '@core/trader/dtos';

export class CoreOpenAccountController {
  public readonly logger = new Logger(CoreOpenAccountController.name);

  @Post('/live')
  @ApiOperation({
    summary: 'Open Live Account',
  })
  async openLiveAccount(@Body() openAccount: TraderOpenLiveAccountDTO) {}

  @Post('/demo')
  @ApiOperation({
    summary: 'Open Demo Account',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TraderOpenLiveAccountDTO,
  })
  async openDemoAccount(@Body() openAccount: TraderOpenLiveAccountDTO) {}
}
