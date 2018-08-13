import React, { Component } from "react";
import { geoLocation, weatherRequest } from "./helper";
import { connect } from "react-redux";
import Login from "../login/Login";
import Clouds_icon from "./assets/Clouds_icon.png";
import Sun_icon from "./assets/Sun_icon.png";
import Rain_icon from "./assets/Rain_icon.png";
import "./style.css";

class Weather extends Component {
  state = {
    temp: "",
    city: "",
    icon: ""
  };

  componentDidMount() {
    geoLocation()
      .then(coords => weatherRequest(coords))
      .then(data =>
        this.setState({
          temp: Math.round(Number(data.main.temp)),
          city: data.name,
          icon: Number(data.weather[0].icon.slice(0, 2))
        })
      );
  }

  render() {
    let icon = this.state.icon;
    let iconUrl = "";
    if (icon) {
      iconUrl =
        icon === 1
          ? Sun_icon
          : icon >= 2 && icon <= 4 ? Clouds_icon : Rain_icon;
    }
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    return (
      <div className="weather-container">
        <div className="weather-top-block">
          <div
            className="weather-icon-container"
            style={{ backgroundImage: `url(${iconUrl})` }}
          >
            {/* {iconUrl && <img src={iconUrl} alt="weather icon" />} */}
          </div>
          <div className="weather-temp">
            <p className="weather-city-p">{this.state.temp}</p>
            <p className="weather-city-p">degrees</p>
          </div>
        </div>
        <div className="weather-city">
          <p className="weather-city-p">{this.state.city}</p>
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

export default connect(mapStateToProps, {})(Weather);
