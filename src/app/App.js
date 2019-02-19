import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PhotoDetailsPage from "../routes/PhotoDetailsPage";
import PhotoFeedPage from "../routes/PhotoFeedPage";
import NotFound from "../routes/NotFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <a className="App-link" href="/#">ZAIstagram</a>
                </header>

                <div className="App-body">
                    <BrowserRouter>
                        <Switch>
                            <Route
                                path="/"
                                component={PhotoFeedPage}
                                exact={true}
                            />
                            <Route
                                path="/:postId"
                                component={PhotoDetailsPage}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
