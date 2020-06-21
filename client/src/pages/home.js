import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="row h-100 justify-content-center align-items-center">
        <div className="jumbotron rounded-0">
          <h1 id="home-name">REBEKAH LASKIN</h1>
        </div>
      </div>
    );
  }
}

export default Home;
