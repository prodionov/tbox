import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Hackathon</h1>
        <form>
          <input type="text" id="user" placeholder="Username" />
          <input type="password" name="pwd" placeholder="Password" />
          <button onClick={this.submitRequest}>Login</button>
        </form>
      </div>
    );
  }
}
