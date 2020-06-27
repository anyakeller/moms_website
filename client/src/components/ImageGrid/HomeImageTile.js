import React, { Component } from "react";

class HomeImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      naturalWidth: props.naturalWidth,
      maxScaleFactor: props.maxScaleFactor,
      isBigScreen: props.isBigScreen
      //maxScaleFactor: props.maxScaleFactor
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    return {
      isBigScreen: newProps.isBigScreen
    };
  }

  render() {
    return (
      <div
        style={{
          width: this.state.isBigScreen
            ? `${this.props.ratioWidthToSum * 100}%`
            : `${this.props.ratioWidthToLargest * 100}%`,
          height: "auto",
          margin: this.state.isBigScreen ? "0px 1.5px" : "1px 5px"
        }}
        className="home-img-shadow"
      >
        <img
          className="home-img-tile img-fluid"
          src={"./../images/" + this.props.file_name}
          tile-key={this.props.id}
          alt={this.props.alt}
          style={{ position: "relative" }}
          //width={this.props.newWidth == 0 ? this.props.width : this.props.newWidth}
          //width={this.state.naturalWidth * this.state.scaleFactor}
        />
      </div>
    );
  }
}

export default HomeImageTile;
