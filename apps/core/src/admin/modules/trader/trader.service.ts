import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Trader as CoreTrader } from '@core/shared/entities';

export class TraderService {
  constructor(
    @InjectRepository(CoreTrader)
    protected readonly traderRepo: Repository<CoreTrader>,
  ) {}
}
