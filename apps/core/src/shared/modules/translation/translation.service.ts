import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { Trader as CoreTrader } from '@core/shared/entities';

@Injectable()
export class TranslationService {
  // constructor(
  //   @InjectRepository(CoreTrader)
  //   protected readonly traderRepo: Repository<CoreTrader>,
  // ) {}
}
