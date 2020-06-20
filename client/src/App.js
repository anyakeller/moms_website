import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

//import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <header>
            <h1>H1 YEET</h1>
            <p>I may die</p>
          </header>

          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              exact
              path="/gallery"
              render={props => <Gallery {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
/*
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route
      exact
      path="/gallery"
      render={props => <Gallery {...props} />}
    />
  </Switch>
*/

export default App;
