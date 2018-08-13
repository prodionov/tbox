import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class SportMini extends Component {
  render() {
    let wins =
      this.props.teams.length === 0
        ? []
        : this.props.teams[0].teams.slice(0, 3);
    return wins.length === 0 ? (
      <h2 className="nothing-message">Nothing to display</h2>
    ) : (
      <ul>
        {wins.map((game, index) => {
          return (
            <li className="Team-item" key={index}>
              {game[1]} on {game[0]}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.sport
  };
};

export default connect(mapStateToProps, {})(SportMini);
