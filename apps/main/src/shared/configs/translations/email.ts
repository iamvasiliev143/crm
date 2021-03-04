import { EMAIL_TRANSLATIONS } from '@core/shared/configs';

import { merge } from 'lodash';

const EMAIL_TRANSLATIONS_LOCAL = {};

export default {
  EMAIL_TRANSLATIONS: merge(EMAIL_TRANSLATIONS, EMAIL_TRANSLATIONS_LOCAL),
};
