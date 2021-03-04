import { EMAIL_TRANSLATIONS as EMAIL_TRANSLATIONS_CORE } from '@core/shared/configs';

import { merge } from 'lodash';

const EMAIL_TRANSLATIONS_LOCAL = {};

export const EMAIL_TRANSLATIONS = merge(
  EMAIL_TRANSLATIONS_CORE,
  EMAIL_TRANSLATIONS_LOCAL,
);
