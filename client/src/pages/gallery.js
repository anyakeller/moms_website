import React, { Component } from "react";
import Navbar from "../components/Navbar";

class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <h1>At the gallery!!!</h1>
        </div>
      </>
    );
  }
}

export default Gallery;
