import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Trader as CoreTrader } from '@core/entities';

@Injectable()
export class CoreTraderService {
  constructor(
    @InjectRepository(CoreTrader)
    protected readonly traderRepo: Repository<CoreTrader>,
  ) {}
}
