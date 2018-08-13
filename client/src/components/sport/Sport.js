import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../login/Login";
import { selectTeamAction } from "../../reducers/sportReducer";
import "./style.css";

const MatchResult = result => {
  return (
    <li class="sport-list-item">
      {result.results[1]} was defeated on {result.results[0]}
    </li>
  );
};

class Sport extends Component {
  state = {
    team: "",
    wins: []
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  submitRequest = event => {
    event.preventDefault();
    let team = { team: this.state.team };
    this.props.selectTeamAction(team);
  };

  render() {
    let wins = this.props.teams.length === 0 ? [] : this.props.teams[0].teams;
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    return (
      <div className="sport-page">
        <div className="sport-headline">
          <h1>Sport</h1>
        </div>
        <form className="sport-form" onSubmit={this.submitRequest}>
          <input
            className="form-input"
            type="text"
            name="team"
            id="team"
            value={this.state.team}
            onChange={this.handleChange}
            placeholder="Enter team name here"
          />
          <button type="submit" className="sport-button" />
        </form>
        <div className="sport-list">
          <ul>
            {wins.map((value, index) => {
              return <MatchResult key={index} results={value} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username,
    teams: state.sport
  };
};

export default connect(mapStateToProps, { selectTeamAction })(Sport);
