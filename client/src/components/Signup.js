import React, { Component } from "react";
import { addUser } from "../utils/addUser";
import { Redirect } from "react-router";

export default class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    toLanding: false
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  submitRequest = event => {
    event.preventDefault();
    let password = this.state.password,
      confirmPassword = this.state.confirmPassword;
    if (password === confirmPassword) {
      let params = {
        username: this.state.username,
        email: this.state.email,
        password
      };
      addUser("./register", params).then(response => {
        if (response.result === "success") {
          alert(`${params.username}, now please log in`);
          this.setState({ toLanding: true });
        }
      });
    } else {
      alert("Confirm Password is not the same as password");
    }
  };

  render() {
    console.log(this.state.toLanding);
    if (this.state.toLanding) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Hackathon</h1>
        <form>
          <input
            type="text"
            name="username"
            id="user"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="confirmPwd"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <button onClick={this.submitRequest}>Register</button>
        </form>
      </div>
    );
  }
}
