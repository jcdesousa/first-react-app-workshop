import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PhotoDetails from "./PhotoDetails";
import base from "./base";
import Main from './Main';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { params } = this.props.match;

    this.ref = base.syncState(`${params.feedId}/posts`, {
      context: this,
      state: "posts"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="http://localhost:3000"
          >
            ZAIstagram
          </a>
        </header>

        <Switch>
          <Route path="/feed/:feedId" component={Main} exact={true}/>
          <Route path="/feed/:feedId/:postId" component={PhotoDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
