import React, { Component } from "react";
import AllImages from "./../../allImages.json";
//import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";

// class version
// import React, { Component } from "react";
class ImageGrid extends Component {
  constructor(props) {
    super(props);
    var imageWidths = this.props.homeImages.map((image, id) => "30%");
    this.state = {
      imageWidths: imageWidths
    };
  }

  populateImages = () => {
    //console.log(this.state.imageWidths);
    return this.props.homeImages.map((image, id) => {
      //console.log(AllImages[image]);
      return (
        <img
          className="home-img-tile"
          src={"./../images/" + AllImages[image].file_name}
          key={id}
          alt={AllImages[image].alt}
          style={{ width: this.state.imageWidths[id], display: "block" }}
        />
      );
      //return <HomeImageTile {...AllImages[image]} key={id} />;
    });
  };

  componentDidMount() {
    console.log("reee");
    var pics = document.getElementsByClassName("home-img-tile");
    this.setState(state => {
      var newDimentions = state.imageWidths.map((widthValue, id) => {
        return pics[id].naturalWidth/10;
      });
      return { imageWidths: newDimentions };
    });

  }

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

export default ImageGrid;
