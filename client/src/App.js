import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

//import "./App.css";

const ROUTES = [
  {
    path: "/",
    component: Home,
    isActive: false,
    name: "Home"
  },
  {
    path: "/gallery",
    component: Gallery,
    isActive: false,
    name: "Gallery"
  }
];

// formats routes for mapping
function formatRoutes(routedata,key) {
  console.log(routedata);
  return (
    <Route
      exact
      path={routedata.path}
      render={props => <routedata.component {...props} />}
      key={key}
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routesList: ROUTES.map((route, key) => formatRoutes(route,key))
    };
    //console.log(this.state.routesList);
  }
  render() {
    return (
      <Router>
        <div id="body-main">
          <Switch>
            {this.state.routesList}
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
