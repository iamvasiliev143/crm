import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountTypeDTO } from '@core/admin/dtos';
import { AccountType } from '@core/shared/entities';

export class AccountTypeService {
  public readonly logger = new Logger(AccountTypeService.name);

  constructor(
    @InjectRepository(AccountType)
    protected readonly accountTypeRepo: Repository<AccountType>,
  ) {}

  async createAccountType(
    accountTypeDTO: AccountTypeDTO,
  ): Promise<AccountType> {
    return await this.accountTypeRepo.save(accountTypeDTO);
  }

  async updateAccountType(
    accountTypeId: string,
    accountTypeDTO: AccountTypeDTO,
  ): Promise<AccountType> {
    return await this.accountTypeRepo.save({
      id: accountTypeId,
      ...accountTypeDTO,
    });
  }

  async deleteAccountType(accountTypeId: string): Promise<void> {
    await this.accountTypeRepo.delete({
      id: accountTypeId,
    });
  }
}
