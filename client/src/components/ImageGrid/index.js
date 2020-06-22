import React from "react";
import AllImages from "./../../allImages.json";
import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";

// const HOMEIMAGES = ["Brooch with criss cross 1", "Brooch with gold disks 2"];

function ImageGrid(props) {
  const homeImages = props.homeImages;
  const populateImages = function() {
    return homeImages.map((image, id) => {
      //console.log(AllImages[image]);
      return <HomeImageTile {...AllImages[image]} key={id} />;
    });
  };

  return (
    <div className="image-row">
      <div className="row flex-fill d-flex align-items-center">
        {populateImages()}
      </div>
    </div>
  );
}

/*
// class version
// import React, { Component } from "react";
class ImageGrid extends Component {
  constructor(props) {
    super(props);
    //console.log(AllImages);
  }

  populateImages = () => {
    return this.props.homeImages.map((image, id) => {
      //console.log(AllImages[image]);
      return <HomeImageTile {...AllImages[image]} key={id} />;
    });
  };

  state = {};
  render() {
    return (
      <div className="image-row">
        <div className="row flex-fill d-flex align-items-center">
          {this.populateImages()}
        </div>
      </div>
    );
  }
}
*/
export default ImageGrid;
