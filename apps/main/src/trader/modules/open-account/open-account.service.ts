import { Injectable } from '@nestjs/common';

import { OpenAccountService as CoreOpenAccountService } from '@core/trader/services';

@Injectable()
export class OpenAccountService extends CoreOpenAccountService {}
