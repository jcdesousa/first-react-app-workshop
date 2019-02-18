import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PhotoDetails from "./PhotoDetails";
import Main from "./Main";

import "./App.css";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="/#">
            ZAIstagram
          </a>
        </header>

        <div className="App-body">
          <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/:postId" component={PhotoDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
