import { Logger, Get } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

import { TraderService } from '@core/admin/services';

export class TraderController {
  public readonly logger = new Logger(TraderController.name);

  constructor(protected readonly traderService: TraderService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get traders',
  })
  @ApiQuery({ name: 'pageIndex', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  async getAllTraders() {
    return await this.traderService.getAllTraders();
  }
}
