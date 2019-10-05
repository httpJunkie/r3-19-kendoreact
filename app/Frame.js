import React, { useContext, lazy, Suspense } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

/* CLDR Data */

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

import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

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

const Home = lazy(() => import('./view-components/Home'));
const SchedulerWrap = lazy(() => import('./view-components/SchedulerWrap'));
const TreeListWrap = lazy(() => import('./view-components/TreeListWrap'));
const ColorPickerWrap = lazy(() => import('./view-components/ColorPickerWrap'));
const ColorGradientWrap = lazy(() => import('./view-components/ColorGradientWrap'));
const ColorPaletteWrap = lazy(() => import('./view-components/ColorPaletteWrap'));
const PagerWrap = lazy(() => import('./view-components/PagerWrap'));
const GridFooterWrap = lazy(() => import('./view-components/GridFooterWrap'));
const LoadingMessage = () => `loading...`;

import Logo from "./partial-components/Logo";
import Sidenav from "./partial-components/Sidenav";
import Topnav from "./partial-components/Topnav";
import Foot from "./partial-components/Foot";

const Frame = () => {
  const context = useContext(AppContext);
  const isMedium = useMediaPredicate("(min-width: 860px)");
  const breakpoint = isMedium ? "medium" : "small";
  return (
    <IntlProvider locale={context.selectedLocale.code}>
      <LocalizationProvider language={context.selectedLocale.code}>
    <BrowserRouter>
      <div className={`app-container ${breakpoint} ${context.themeMode}`}>
        <main>
          <header>
            <Logo />
            <Topnav />
          </header>
          <section>
            <Switch>
              <Suspense fallback={<LoadingMessage />}>
                <Route exact path="/" component={Home} />
                <Route exact path="/scheduler" component={SchedulerWrap} />
                <Route exact path="/tree-list" component={TreeListWrap} />

                {/* These routes need props */}
                <Route exact path="/color-palette" render={(props) => 
                  <ColorPaletteWrap {...props} themeMode={context.themeMode} />
                } />
                <Route exact path="/color-picker" render={(props) => 
                  <ColorPickerWrap {...props} themeMode={context.themeMode} />
                }  />
                {/* These routes need props */}

                <Route exact path="/color-gradient" component={ColorGradientWrap} />
                <Route exact path="/pager" component={PagerWrap} />
                <Route exact path="/grid" component={GridFooterWrap} />
              </Suspense>
              <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
          </section>
          <footer>
            <Foot />
          </footer>
        </main>
        <Sidenav />
      </div>
    </BrowserRouter>
      </LocalizationProvider>
    </IntlProvider>
  );
};

export default Frame;