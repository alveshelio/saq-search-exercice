import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Search from "../pages/search";
import NoMatch from "../pages/404";

interface AppRoutes {
  path: string;
  Component: React.SFC | React.ComponentClass;
  exact: boolean;
}

const appRoutes: AppRoutes[] = [
  {
    path: "/",
    Component: Home,
    exact: true,
  },
  {
    path: "/search",
    Component: Search,
    exact: false,
  },
  {
    path: "",
    Component: NoMatch,
    exact: false,
  },
];

const Routes = () => (
  <main>
    <BrowserRouter>
      <Switch>
        {appRoutes.map(({ exact, path, Component }, index) => (
          <Route key={`${path}-${index}`} exact={exact} path={path} component={Component} />
        ))}
      </Switch>
    </BrowserRouter>
  </main>
);

export default Routes;
