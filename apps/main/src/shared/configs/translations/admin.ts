import { ADMIN_TRANSLATIONS as ADMIN_TRANSLATIONS_CORE } from '@core/shared/configs';

import { merge } from 'lodash';

const ADMIN_TRANSLATIONS_LOCAL = {};

export const ADMIN_TRANSLATIONS = merge(
  ADMIN_TRANSLATIONS_CORE,
  ADMIN_TRANSLATIONS_LOCAL,
);
