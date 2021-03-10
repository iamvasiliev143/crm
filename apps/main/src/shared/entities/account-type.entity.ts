import { Entity } from 'typeorm';

import { AccountType as CoreAccountType } from '@core/shared/entities';

@Entity()
export class AccountType extends CoreAccountType {}
