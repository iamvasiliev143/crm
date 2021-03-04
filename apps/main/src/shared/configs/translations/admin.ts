import { ADMIN_TRANSLATIONS } from '@core/shared/configs';

import { merge } from 'lodash';

const ADMIN_TRANSLATIONS_LOCAL = {};

export default {
  ADMIN_TRANSLATIONS: merge(ADMIN_TRANSLATIONS, ADMIN_TRANSLATIONS_LOCAL),
};
