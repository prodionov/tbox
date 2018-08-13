import React, { Component } from "react";
import { apiRequest } from "../../utils/fetchApi";
import { connect } from "react-redux";
import Login from "../login/Login";
import "./style.css";
import { BBC_KEY } from "../../token";

//topheadlines url
const url =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + BBC_KEY;

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    apiRequest(url).then(news => this.setState({ news: news.articles }));
  }

  render() {
    const { news } = this.state;
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    if (news.length !== 0) {
      const { title, url, urlToImage, description } = news[0];
      return (
        <div className="News-block">
          <div className="News-title">
            <h5>{title}</h5>
          </div>
          <div className="News-image">
            <img className="News-big-image" src={urlToImage} alt="news image" />
          </div>
          <div className="News-description">
            <h3>{description}</h3>
          </div>
        </div>
      );
    }
    return <p>Loading</p>;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username
  };
};

export default connect(mapStateToProps, {})(News);
