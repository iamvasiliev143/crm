import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CoreOpenAccountController } from '@core/trader/controllers';

@ApiTags('Open Account')
@Controller('open-account')
export class TraderOpenAccountController extends CoreOpenAccountController {}
