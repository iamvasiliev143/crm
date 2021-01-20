import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CoreTraderService } from '@core/services';

import { Trader } from './trader.entity';

@Injectable()
export class TraderService extends CoreTraderService {
  constructor(
    @InjectRepository(Trader)
    protected readonly traderRepo: Repository<Trader>,
  ) {
    super(traderRepo);
  }
}
