import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { TraderOpenLiveAccountDTO } from '@core/trader/dtos';

@ApiTags('Open Account')
@Controller('')
export class CoreOpenAccountController {
  @Post('/open-live-account')
  @ApiOperation({
    summary: 'Open Live Account',
  })
  async openLiveAccount(@Body() openAccount: TraderOpenLiveAccountDTO) {}

  @Post('/open-demo-account')
  @ApiOperation({
    summary: 'Open Demo Account',
  })
  async openDemoAccount(@Body() openAccount: TraderOpenLiveAccountDTO) {}
}
