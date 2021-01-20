import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CoreTraderService } from '@core/services';

@ApiTags('Traders')
@Controller('traders')
export class CoreTraderController {
  constructor(protected readonly traderService: CoreTraderService) {}
}
