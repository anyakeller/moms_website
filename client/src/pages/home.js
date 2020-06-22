import React, { Component } from "react";
import ImageGrid from "./../components/ImageGrid";

const HOMEIMAGES = ["Brooch with criss cross 1", "Brooch with gold disks 2","Brooch with gold wires2"];

class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <>
        <div className="row align-items-center">
          <h1 id="home-name">REBEKAH LASKIN</h1>
        </div>
        <ImageGrid homeImages={HOMEIMAGES} />
      </>
    );
  }
}

export default Home;
