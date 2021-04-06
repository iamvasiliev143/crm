import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OpenAccountService as CoreOpenAccountService } from '@core/trader/services';

import { Trader } from '@shared/entities';

@Injectable()
export class OpenAccountService extends CoreOpenAccountService {
  constructor(
    @InjectRepository(Trader)
    protected readonly traderRepo: Repository<Trader>,
  ) {
    super(traderRepo);
  }
}
