import React, { Component } from "react";

class HomeImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      naturalWidth: props.naturalWidth,
      scaleFactor: props.scaleFactor
    };
  }

  static getDerivedStateFromProps(newProps, prevState) {
    return {
      scaleFactor: newProps.scaleFactor
    };
  }

  render() {
    return (
      <img
        className="home-img-tile"
        src={"./../images/" + this.props.file_name}
        tile-key={this.props.id}
        alt={this.props.alt}
        //width={this.props.newWidth == 0 ? this.props.width : this.props.newWidth}
        width={this.state.naturalWidth * this.state.scaleFactor}
      />
    );
  }
}

export default HomeImageTile;
