import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountType } from '@core/shared/entities';
import { AccountTypeE } from '@core/shared/consts';

export class AccountTypeService {
  public readonly logger = new Logger(AccountTypeService.name);

  constructor(
    @InjectRepository(AccountType)
    protected readonly accountTypeRepo: Repository<AccountType>,
  ) {}

  async getTrading() {
    return await this.accountTypeRepo.find({
      where: {
        type: AccountTypeE.trading,
      },
    });
  }

  async getIb() {
    return await this.accountTypeRepo.find({
      where: {
        type: AccountTypeE.ib,
      },
    });
  }

  async getDemo() {
    return await this.accountTypeRepo.find({
      where: {
        type: AccountTypeE.demo,
      },
    });
  }
}
