import React from "react";
import { Switch, Route } from "react-router-dom"; //useLocation

// pages
import Home from "./pages/home";
import Gallery from "./pages/gallery";
// components
import Navbar from "./components/Navbar";

const ROUTES = [
  {
    path: "/",
    component: Home,
    name: "Home"
  },
  {
    path: "/gallery",
    component: Gallery,
    name: "Gallery"
  }
];

// formats routes for mapping
function formatRoutes(routedata, key) {
  return (
    <Route
      exact
      path={routedata.path}
      render={props => {
        return <routedata.component {...props} />;
      }}
      key={key}
    />
  );
}

const routesList = ROUTES.map((route, key) => formatRoutes(route, key));

const InsideApp = () => {
  //const location = useLocation();
  return (
    //  <div id="body-main" className={where === "/" ? "body-home" : ""}>
    <div id="body-main">
      <div className="container flex-column h-100 d-flex ">
        <div className="row justify-content-end">
          <Navbar routes={ROUTES} />
        </div>
        <Switch>{routesList}</Switch>
      </div>
    </div>
  );
};

export default InsideApp;
