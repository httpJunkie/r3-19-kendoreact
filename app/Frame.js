import React, { useContext, lazy, Suspense } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { IntlProvider, LocalizationProvider } from '@progress/kendo-react-intl';
import { } from './data/cldr';

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