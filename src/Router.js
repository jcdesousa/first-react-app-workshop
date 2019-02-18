import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

 const Router = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Router;
