import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AccountTypeController as CoreAccountTypeController } from '@core/admin/controllers';

import { AccountTypeService } from './account-type.service';

@ApiTags('Types of Accounts')
@Controller('account-types')
export class AccountTypeController extends CoreAccountTypeController {
  constructor(protected readonly accountTypeService: AccountTypeService) {
    super(accountTypeService);
  }
}
