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
            ? this.state.naturalWidth * this.state.maxScaleFactor
            : `${this.props.ratioWidthToLargest * 100}%`,
          height: "auto"
        }}
        className={this.state.isBigScreen ? "" : "px-2"}
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
