import React, { useState } from "react";
import { useLocation, Switch, Route } from "react-router-dom";

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
  const location = useLocation();
  const [where, setWhere] = useState("/");

  React.useEffect(() => {
    console.log("Location changed");
    setWhere(location.pathname);
    console.log(where);
  }, [location]);

  return (
    <div id="body-main" className={where === "/" ? "body-home" : ""}>
      <div class="container h-100">
        <div className="row justify-content-end">
          <Navbar routes={ROUTES} />
        </div>
        <Switch>{routesList}</Switch>
      </div>
    </div>
  );
};

export default InsideApp;
