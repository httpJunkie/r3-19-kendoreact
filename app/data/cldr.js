import { load, loadMessages } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgLocalCurrency from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDateFields from'cldr-dates-full/main/bg/dateFields.json';

import deNumbers from 'cldr-numbers-full/main/de/numbers.json';
import deLocalCurrency from 'cldr-numbers-full/main/de/currencies.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';
import deDateFields from'cldr-dates-full/main/de/dateFields.json';

import esNumbers from 'cldr-numbers-full/main/es/numbers.json';
import esLocalCurrency from 'cldr-numbers-full/main/es/currencies.json';
import esCaGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import esDateFields from'cldr-dates-full/main/es/dateFields.json';

import faNumbers from 'cldr-numbers-full/main/fa/numbers.json';
import faLocalCurrency from 'cldr-numbers-full/main/fa/currencies.json';
import faCaGregorian from 'cldr-dates-full/main/fa/ca-gregorian.json';
import faDateFields from'cldr-dates-full/main/fa/dateFields.json';

import frNumbers from 'cldr-numbers-full/main/fr/numbers.json';
import frLocalCurrency from 'cldr-numbers-full/main/fr/currencies.json';
import frCaGregorian from 'cldr-dates-full/main/fr/ca-gregorian.json';
import frDateFields from'cldr-dates-full/main/fr/dateFields.json';

import gbNumbers from 'cldr-numbers-full/main/en-GB/numbers.json';
import gbLocalCurrency from 'cldr-numbers-full/main/en-GB/currencies.json';
import gbCaGregorian from 'cldr-dates-full/main/en-GB/ca-gregorian.json';
import gbDateFields from'cldr-dates-full/main/en-GB/dateFields.json';

import usNumbers from 'cldr-numbers-full/main/en/numbers.json';
import usLocalCurrency from 'cldr-numbers-full/main/en/currencies.json';
import usCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import usDateFields from'cldr-dates-full/main/en/dateFields.json';

import zhNumbers from 'cldr-numbers-full/main/zh/numbers.json';
import zhLocalCurrency from 'cldr-numbers-full/main/zh/currencies.json';
import zhCaGregorian from 'cldr-dates-full/main/zh/ca-gregorian.json';
import zhDateFields from'cldr-dates-full/main/zh/dateFields.json';

load(
  likelySubtags,
  currencyData,
  weekData,
  bgNumbers,
  bgLocalCurrency,
  bgCaGregorian,
  bgDateFields,
  deNumbers,
  deLocalCurrency,
  deCaGregorian,
  deDateFields,
  esNumbers,
  esLocalCurrency,
  esCaGregorian,
  esDateFields,
  faNumbers,
  faLocalCurrency,
  faCaGregorian,
  faDateFields,
  frNumbers,
  frLocalCurrency,
  frCaGregorian,
  frDateFields,
  gbNumbers,
  gbLocalCurrency,
  gbCaGregorian,
  gbDateFields,
  usNumbers,
  usLocalCurrency,
  usCaGregorian,
  usDateFields,
  zhNumbers,
  zhLocalCurrency,
  zhCaGregorian,
  zhDateFields
);

import deMessages from '../lib/kendo-react-messages/messages/de-DE/de-DE.json';
loadMessages(deMessages, 'de-DE');

import enMessages from '../lib/kendo-react-messages/messages/en-US/en-US.json';
loadMessages(enMessages, 'en-US');

import esMessages from '../lib/kendo-react-messages/messages/es-ES/es-ES.json';
loadMessages(esMessages, 'es-ES');

import faMessages from '../lib/kendo-react-messages/messages/fa-IR/fa-IR.json';
loadMessages(faMessages, 'fa-IR');

import frMessages from '../lib/kendo-react-messages/messages/fr-CA/fr-CA.json';
loadMessages(frMessages, 'fr-CA');

import zhMessages from '../lib/kendo-react-messages/messages/zh-CN/zh-CN.json';
loadMessages(zhMessages, 'zh-CN');