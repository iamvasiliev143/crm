import { Logger, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AccountTypeService } from '@core/shared/services';

export class AccountTypeController {
  public readonly logger = new Logger(AccountTypeController.name);

  constructor(protected readonly accountTypesService: AccountTypeService) {}

  @Get('/live')
  @ApiOperation({
    summary: 'Get Accounts of Type Live',
  })
  async getLive() {
    return this.accountTypesService.getLive();
  }

  @Get('/demo')
  @ApiOperation({
    summary: 'Get Accounts of Type Demo',
  })
  async getDemo() {
    return this.accountTypesService.getDemo();
  }

  @Get('/ib')
  @ApiOperation({
    summary: 'Get Accounts of Type Ib',
  })
  async getIb() {
    return this.accountTypesService.getIb();
  }
}
