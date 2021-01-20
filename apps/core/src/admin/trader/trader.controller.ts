import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CoreTraderService } from '@core/admin/services';
import { TraderSignupDTO } from '@core/admin/dtos';

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