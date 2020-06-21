import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="home-div">
        <div className="container">
        <h1 id="home-name">REBEKAH LASKIN</h1>
          <p>You are home!!!</p>
        </div>
      </div>
    );
  }
}

export default Home;
