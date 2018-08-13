import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Login from "../login/Login";
import Weather from "../weather/Weather";
import Photos from "../photos/Photos";
import Todo from "../todo/Todo";
import NewsMini from "../news-mini/News-mini";
import SportMini from "../sport-mini/SportMini";
import PieChart from "../pieChart/PieChart";
import TodoMini from "../todo-mini/TodoMini";
import "./style.css";

class LandingPage extends Component {
  render() {
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    return (
      <div className="Display-main">
        <h1>Hello {this.props.username}</h1>
        <div className="DisplaySection">
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./weather">
                  <span>Weather</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <Weather />
            </div>
          </div>
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./news">
                  <span>News</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <NewsMini />
            </div>
          </div>
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./sport">
                  <span>Sport</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <SportMini />
            </div>
          </div>
        </div>

        <div className="DisplaySection">
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./photos">
                  <span>Photos</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <Photos />
            </div>
          </div>
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./tasks">
                  <span>Todo List</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <TodoMini />
            </div>
          </div>
          <div className="display">
            <div key={1} className="displayTitle">
              <h2>
                <a href="./clothes">
                  <span>Clothes</span>
                </a>
              </h2>
            </div>
            <div className="displayItem">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username
  };
};

export default connect(mapStateToProps, {})(LandingPage);
