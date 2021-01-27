import { Entity } from 'typeorm';

import { TranslationAdmin as CoreTranslationAdmin } from '@core/shared/entities';

@Entity()
export class TranslationAdmin extends CoreTranslationAdmin {}
