import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CoreTraderController } from '@core/controllers';

import { TraderService } from './trader.service';

@ApiTags('Traders')
@Controller('traders')
export class TraderController extends CoreTraderController {
  constructor(protected readonly traderService: TraderService) {
    super(traderService);
  }
}
