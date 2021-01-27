import { Entity } from 'typeorm';

import { Language as CoreLanguage } from '@core/shared/entities';

@Entity()
export class Language extends CoreLanguage {}
