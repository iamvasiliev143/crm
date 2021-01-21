import { Entity } from 'typeorm';

import { TranslationEmail as TranslationEmailCore } from '@core/shared/entities';

@Entity()
export class TranslationEmail extends TranslationEmailCore {}
