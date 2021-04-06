import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Trader as CoreTrader } from '@core/shared/entities';
import { ToLocalDateTime } from '@core/shared/helpers';

const publicValues: any = [
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'messengerType',
  'messengerAccount',
  'country',
  'province',
  'city',
  'zip',
  'leverage',
  'timezone',
  'createdAt',
];

export class TraderService {
  constructor(
    @InjectRepository(CoreTrader)
    protected readonly traderRepo: Repository<CoreTrader>,
  ) {}

  async getAllTraders() {
    const traders = await this.traderRepo.find({
      relations: ['tasks'],
      select: publicValues,
    });

    return traders.map(
      (trader) =>
        (trader.createdAt = ToLocalDateTime(trader.timezone, trader.createdAt)),
    );
  }
}
