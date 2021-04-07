import { Entity } from 'typeorm';

import { TaskOpenTradingAccount as CoreTaskOpenTradingAccount } from '@core/shared/entities';

@Entity()
export class TaskOpenTradingAccount extends CoreTaskOpenTradingAccount {}
