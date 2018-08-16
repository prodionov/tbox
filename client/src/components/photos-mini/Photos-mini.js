import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../login/Login";
import { addPhoto } from "../../reducers/photoReducer";
import Dropzone from "react-dropzone";
import "./style.css";

class PhotosMini extends Component {
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
    //let photoList = this.props.photoList;
    let photoList =
      this.props.photoList.length === 0 ? [] : this.props.photoList.slice(0, 2);
    return (
      <div className="dropped-page-mini">
        <div className="dropped-container-mini">
          {photoList.length !== 0
            ? photoList.map((photo, index) => {
                return (
                  <img
                    src={photo.photo}
                    key={index}
                    className="dropped-img-mini"
                  />
                );
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

export default connect(mapStateToProps, { addPhoto })(PhotosMini);
