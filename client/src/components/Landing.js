import React, { Component } from "react";
import { addUser } from "../utils/addUser";
import { Redirect } from "react-router";

export default class LandingPage extends Component {
  state = {
    username: "",
    password: "",
    toSignup: false
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  redirectSignup = event => {
    this.setState({ toSignup: true });
  };

  submitRequest = event => {
    event.preventDefault();
    let params = {
      username: this.state.username,
      password: this.state.password
    };
    addUser("./login", params).then(response => {
      if (response.result === "success") {
        this.setState({ toLanding: true });
      }
    });
  };

  render() {
    if (this.state.toSignup) {
      return <Redirect to="/signup" />;
    }
    return (
      <div>
        <h1>Hackathon</h1>
        <form>
          <input
            type="text"
            name="username"
            id="user"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button onClick={this.submitRequest}>Login</button>
        </form>
        <h2>New to the hackathon?</h2>
        <button onClick={this.redirectSignup}>Sign up</button>
      </div>
    );
  }
}
