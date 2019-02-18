import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

 const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={() => <Redirect to="/feed/2" push />}
        exact={true}
      />
      <Route path="/feed/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
