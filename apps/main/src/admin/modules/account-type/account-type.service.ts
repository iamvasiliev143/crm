import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountType } from '@shared/entities';

import { AccountTypeService as CoreAccountTypeService } from '@core/admin/services';

@Injectable()
export class AccountTypeService extends CoreAccountTypeService {
  constructor(
    @InjectRepository(AccountType)
    protected readonly accountTypeRepo: Repository<AccountType>,
  ) {
    super(accountTypeRepo);
  }
}
