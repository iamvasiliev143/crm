import { Logger, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AccountTypeService } from '@core/admin/services';

import { AccountTypeDTO } from '@core/admin/dtos';

export class AccountTypeController {
  public readonly logger = new Logger(AccountTypeController.name);

  constructor(protected readonly accountTypeService: AccountTypeService) {}

  @Post('/account-type')
  @ApiOperation({
    summary: 'Create Account Type',
  })
  async createAccountType(@Body() accountTypeDTO: AccountTypeDTO) {
    return await this.accountTypeService.createAccountType(accountTypeDTO);
  }

  @Patch('/account-type/:accountTypeId')
  @ApiOperation({
    summary: 'Update Account Type',
  })
  async updateTranslation(
    @Param('accountTypeId') accountTypeId: string,
    @Body() accountType: AccountTypeDTO,
  ) {
    return await this.accountTypeService.updateAccountType(
      accountTypeId,
      accountType,
    );
  }

  @Delete('/account-type/:accountTypeId')
  @ApiOperation({
    summary: 'Delete Account Type',
  })
  async deleteTranslation(@Param('accountTypeId') accountTypeId: string) {
    await this.accountTypeService.deleteAccountType(accountTypeId);
  }
}
