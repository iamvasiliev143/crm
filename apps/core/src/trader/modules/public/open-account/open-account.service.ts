import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import {
  TraderOpenTradingAccountDTO,
  TraderOpenDemoAccountDTO,
} from '@core/trader/dtos';
import { TaskDTO } from '@core/admin/dtos';
import { Trader } from '@core/shared/entities';

// import { TaskService } from '@core/admin/services';

export class OpenAccountService {
  public readonly logger = new Logger(OpenAccountService.name);

  constructor(
    @InjectRepository(Trader)
    protected readonly traderRepo: Repository<Trader>,
    ) // protected readonly taskService: TaskService,
  {}

  async openTradingAccount(traderDTO: TraderOpenTradingAccountDTO) {
    traderDTO.password = await bcrypt.hash(traderDTO.password, 10);

    const taskPayload: TaskDTO = {
      title: '123',
      description: '123',
    };

    const trader = await this.traderRepo.save({
      ...traderDTO,
      ...traderDTO.messenger,
    });

    // const task = await this.taskService.createTask({...taskPayload, trader: trader.id});

    return {
      trader,
    };
  }

  async openDemoAccount(traderDTO: TraderOpenDemoAccountDTO) {
    traderDTO.password = await bcrypt.hash(traderDTO.password, 10);

    return await this.traderRepo.save({
      ...traderDTO,
      ...traderDTO.messenger,
    });
  }
}
