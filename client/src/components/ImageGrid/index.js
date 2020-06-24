import React, { Component } from "react";
import AllImages from "./../../allImages.json";
import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";

// class version
// import React, { Component } from "react";
class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleFactor: 0.15
    };
  }

  populateImages = () => {
    const originalWidths = this.props.homeImages.map((image, id) => {
      return AllImages[image].width;
    });
    return this.props.homeImages.map((image, id) => {
      return (
        <HomeImageTile
          scaleFactor={this.state.scaleFactor}
          naturalWidth={originalWidths[id]}
          {...AllImages[image]}
          id={id}
          key={id}
        />
      );
    });
  };

  handleInputChange = event => {
    console.log("change");
    const value = event.target.value;
    let parsed = parseFloat(value);
    if (parsed) {
      this.setState(state => {
        return { scaleFactor: parsed };
      });
    }
  };
  /*
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span>
      </div>
      <input
        type="text"
        onChange={this.handleInputChange}
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    */

  render() {
    return (
      //<div className="image-row">
        <div className="row justify-content-center bg-blue flex-grow-1 align-items-center">
          <div id="home-image-div">{this.populateImages()}</div>
        </div>
    //  </div>
    );
  }
}

export default ImageGrid;
