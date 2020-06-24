import React, { Component } from "react";

class HomeImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      naturalWidth: props.naturalWidth,
      scaleFactor: props.scaleFactor,
      imgMarginsToggle: props.imgMarginsToggle
      //maxScaleFactor: props.maxScaleFactor
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    return {
      scaleFactor: newProps.scaleFactor,
      imgMarginsToggle: newProps.imgMarginsToggle
    };
  }

  /*
   <div
          className="col-xl-auto col-lg-12 col-md-12 col-sm-12 col-12 px-0"
          style={{
            maxWidth: this.state.naturalWidth * this.state.scaleFactor,
            height: "auto"
          }}
        >
        */

  render() {
    return (
      <div
        style={{
          maxWidth: this.state.naturalWidth * this.state.scaleFactor,
          height: "auto"
        }}
        className={this.state.imgMarginsToggle ? "px-2" : ""}
      >
        <img
          className="home-img-tile img-fluid"
          src={"./../images/" + this.props.file_name}
          tile-key={this.props.id}
          alt={this.props.alt}
          //width={this.props.newWidth == 0 ? this.props.width : this.props.newWidth}
          //width={this.state.naturalWidth * this.state.scaleFactor}
        />
      </div>
    );
  }
}

export default HomeImageTile;
