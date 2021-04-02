import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import {
  TraderOpenTradingAccountDTO,
  TraderOpenDemoAccountDTO,
} from '@core/trader/dtos';
import { Trader } from '@core/shared/entities';

export class OpenAccountService {
  public readonly logger = new Logger(OpenAccountService.name);

  constructor(
    @InjectRepository(Trader)
    protected readonly traderRepo: Repository<Trader>,
  ) {}

  async openTradingAccount(trader: TraderOpenTradingAccountDTO) {
    trader.password = await bcrypt.hash(trader.password, 10);

    return await this.traderRepo.save({
      ...trader,
      ...trader.messenger,
    });
  }

  async openDemoAccount(trader: TraderOpenDemoAccountDTO) {
    trader.password = await bcrypt.hash(trader.password, 10);

    return await this.traderRepo.save({
      ...trader,
      ...trader.messenger,
    });
  }
}
