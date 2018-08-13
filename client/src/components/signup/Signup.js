import React, { Component } from "react";
import { addUser } from "../../utils/addUser";
import { Redirect } from "react-router";
import "./style.css";

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
      <div className="signup-page">
        <div className="signup-headline">
          <h1>Hackathon</h1>
        </div>
        <form className="signup-form">
          <div className="signup-input">
            <input
              type="text"
              name="username"
              id="user"
              placeholder="Username"
              className="form-input"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="signup-input">
            <input
              className="form-input"
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="password"
              id="confirmPwd"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button className="register-btn" onClick={this.submitRequest} />
        </form>
      </div>
    );
  }
}
