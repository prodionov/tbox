import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />;
          <Route exact path="/signup" render={() => <Signup />} />;
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
