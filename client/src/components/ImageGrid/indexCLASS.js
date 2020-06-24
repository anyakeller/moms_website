import React, { Component } from "react";
import AllImages from "./../../allImages.json";
import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";

// class version
// import React, { Component } from "react";
class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.maxScaleFactor = 0.15;
    this.state = {
      windowWidth: null,
      windowHeight: null,
      scaleFactor: this.maxScaleFactor
    };

    //this.homeImageRow = React.createRef();
  }

  populateImages = () => {
    const originalWidths = this.props.homeImages.map((image, id) => {
      return AllImages[image].width;
    });
    return this.props.homeImages.map((image, id) => {
      return (
        <HomeImageTile
          scaleFactor={this.state.scaleFactor}
          maxScaleFactor={this.maxScaleFactor}
          naturalWidth={originalWidths[id]}
          {...AllImages[image]}
          id={id}
          key={id}
        />
      );
    });
  };

  updateDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth, //this.homeImageRow.current.offsetWidth,
      windowHeight: window.innerHeight //this.homeImageRow.current.offsetWidth
    });
    console.log(this.state);
  };

  componentDidMount() {
    //this.updateDimensions();
    //window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    //window.removeEventListener("resize", this.updateDimensions);
  }

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
      //align-items-center flex-grow-1
      //ref={this.homeImageRow}
      <div
        className="row justify-content-center"
        style={{ position: "relative", top: "30px" }}
      >
        <div className="d-flex flex-xl-row flex-md-column flex-sm-column flex-column flex-wrap">
          {this.populateImages()}
        </div>
      </div>
      //  </div>
    );
  }
}

export default ImageGrid;
