import { Logger } from '@nestjs/common';
import { TraderService } from '@core/admin/services';

export class TraderController {
  public readonly logger = new Logger(Logger.name);

  constructor(protected readonly traderService: TraderService) {}
}
