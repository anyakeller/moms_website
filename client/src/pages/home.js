import React from "react";
import ImageGrid from "./../components/ImageGrid";

function Home() {
  return (
    <>
      <div className="row align-items-center">
        <h1 id="home-name" className="mt-5 mb-0">REBEKAH LASKIN</h1>
      </div>
      <ImageGrid/>
    </>
  );
}
/*
// class version
// import React, { Component } from "react";
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
*/

export default Home;
