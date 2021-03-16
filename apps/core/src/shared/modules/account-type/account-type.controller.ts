import { Logger, Get } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

import { AccountTypeService } from '@core/shared/services';

import { AccountTypeE } from '@core/shared/consts';

export class AccountTypeController {
  public readonly logger = new Logger(AccountTypeController.name);

  constructor(protected readonly accountTypesService: AccountTypeService) {}

  @Get('/trading')
  @ApiOperation({
    summary: 'Get Accounts of Type Trading',
  })
  async getTrading() {
    return this.accountTypesService.getTrading();
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
