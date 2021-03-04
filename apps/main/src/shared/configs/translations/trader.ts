import { TRADER_TRANSLATIONS as TRADER_TRANSLATIONS_CORE } from '@core/shared/configs';

import { merge } from 'lodash';

const TRADER_TRANSLATIONS_LOCAL = {
  footer: {
    copyright: '© 2021 Copyright CRM Ltd. 2021 — All rights reserved',
  },
};

export const TRADER_TRANSLATIONS = merge(
  TRADER_TRANSLATIONS_CORE,
  TRADER_TRANSLATIONS_LOCAL,
);
