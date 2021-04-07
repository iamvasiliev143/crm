import { Entity } from 'typeorm';

import { TaskOpenDemoAccount as CoreTaskOpenDemoAccount } from '@core/shared/entities';

@Entity()
export class TaskOpenDemoAccount extends CoreTaskOpenDemoAccount {}
