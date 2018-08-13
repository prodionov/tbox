import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { loginUserAction } from "../../reducers/loginReducer";
import "./style.css";

class Login extends Component {
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
    this.props.loginUserAction(params);
  };

  render() {
    if (this.state.toSignup) {
      return <Redirect to="/signup" />;
    }
    if (this.props.isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page">
        <div className="login-headline">
          <h1>Hackathon</h1>
        </div>
        <form className="login-form">
          <div className="login-form-input">
            <input
              className="form-input"
              type="text"
              name="username"
              id="user"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              className="form-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <button onClick={this.submitRequest} className="login-btn" />
        </form>
        <h2 className="login-signup-link">
          New to the hackathon? <a href="/signup">Sign up</a>
        </h2>
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

export default connect(mapStateToProps, { loginUserAction })(Login);
