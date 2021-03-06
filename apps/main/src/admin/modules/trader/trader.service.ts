import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TraderService as CoreTraderService } from '@core/admin/services';

import { Trader } from '@shared/entities';

@Injectable()
export class TraderService extends CoreTraderService {
  constructor(
    @InjectRepository(Trader)
    protected readonly traderRepo: Repository<Trader>,
  ) {
    super(traderRepo);
  }
}
