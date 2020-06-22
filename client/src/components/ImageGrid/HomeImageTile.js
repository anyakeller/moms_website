import React, { Component } from "react";

class HomeImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }
  render() {
    return (
      <img
        className="home-img-tile"
        src={"./../images/" + this.props.file_name}
        key={this.props.id}
        alt={this.props.alt}
        style={{ maxWidth: "30%", display: "block" }}
      />
    );
  }
}

export default HomeImageTile;
