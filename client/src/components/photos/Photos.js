import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../login/Login";
import { addPhoto } from "../../reducers/photoReducer";
import Dropzone from "react-dropzone";
import "./style.css";

class Photos extends Component {
  state = {
    imageList: [],
    imgSrc: null
  };

  handleOnDrop = (files, rejecteFiles) => {
    //imageBase64Data;
    const currentFile = files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        console.log("reader result", reader.result);
        this.setState({
          imgSrc: reader.result
        });
        this.props.addPhoto(this.state.imgSrc);
      },
      false
    );
    reader.readAsDataURL(currentFile);
  };

  render() {
    const { imgSrc } = this.state;
    let photoList = this.props.photoList;
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    return (
      <div className="dropped-page">
        <h2>Photos</h2>
        <div className="dropped-container">
          <Dropzone onDrop={this.handleOnDrop}>Drop file here</Dropzone>
          {photoList.length !== 0
            ? photoList.map((photo, index) => {
                return <img src={photo.photo} className="dropped-img" />;
              })
            : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    photoList: state.photo
  };
};

export default connect(mapStateToProps, { addPhoto })(Photos);
