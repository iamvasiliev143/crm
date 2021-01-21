import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TranslationService as CoreTranslationService } from '@core/shared/services';

@Injectable()
export class TranslationService extends CoreTranslationService {}
