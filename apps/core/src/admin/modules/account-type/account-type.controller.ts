import { Logger, Post, Patch, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';

import { AccountTypeService } from '@core/admin/services';

import { AccountTypeDTO } from '@core/admin/dtos';

export class AccountTypeController {
  public readonly logger = new Logger(AccountTypeController.name);

  constructor(protected readonly accountTypeService: AccountTypeService) {}

  @Post('/account-type')
  @ApiOperation({
    summary: 'Create Account Type',
  })
  @ApiBody({ type: AccountTypeDTO })
  async createAccountType(@Body() accountTypeDTO: AccountTypeDTO) {
    return await this.accountTypeService.createAccountType(accountTypeDTO);
  }

  @Patch('/account-type/:accountTypeId')
  @ApiOperation({
    summary: 'Update Account Type',
  })
  @ApiBody({ type: AccountTypeDTO })
  async updateTranslation(
    @Param('accountTypeId') accountTypeId: string,
    @Body() accountTypeDTO: AccountTypeDTO,
  ) {
    return await this.accountTypeService.updateAccountType(
      accountTypeId,
      accountTypeDTO,
    );
  }
}
