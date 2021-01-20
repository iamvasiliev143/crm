import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CoreTraderService } from '@core/services';
import { TraderSignupDTO } from '@core/dtos';

@ApiTags('Traders')
@Controller('traders')
export class CoreTraderController {
  constructor(protected readonly traderService: CoreTraderService) {}

  @Post('/create')
  @ApiOperation({
    summary: 'Creating task',
  })
  async createTask(@Body() TraderDTO: TraderSignupDTO) {}
}
