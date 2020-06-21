import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <h1>You are home!!!</h1>
        </div>
      </>
    );
  }
}

export default Home;
