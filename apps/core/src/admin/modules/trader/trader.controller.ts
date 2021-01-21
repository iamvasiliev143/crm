import { Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { TraderService } from '@core/admin/services';

@ApiTags('Traders')
@Controller('traders')
export class TraderController {
  constructor(protected readonly traderService: TraderService) {}

  @Post('/create')
  @ApiOperation({
    summary: 'Creating task',
  })
  async createTask() {}
}
