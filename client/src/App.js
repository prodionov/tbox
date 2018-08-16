import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Redirect } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./components/landing/Landing";
import Signup from "./components/signup/Signup";
import News from "./components/news/News";
import Weather from "./components/weather/Weather";
import Sport from "./components/sport/Sport";
import Todo from "./components/todo/Todo";
import PieChart from "./components/pieChart/PieChart";
import Photos from "./components/photos/Photos";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />;
            <Route exact path="/signup" render={() => <Signup />} />;
            <Route exact path="/news" render={() => <News />} />;
            <Route exact path="/weather" render={() => <Weather />} />;
            <Route exact path="/sport" render={() => <Sport />} />;
            <Route exact path="/tasks" render={() => <Todo />} />;
            <Route exact path="/clothes" render={() => <PieChart />} />;
            <Route exact path="/photos" render={() => <Photos />} />;
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
