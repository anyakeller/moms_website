import React from "react";
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

  React.useEffect(() => {
    console.log("Location changed");
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar routes={ROUTES} />
      <Switch>{routesList}</Switch>
    </>
  );
};

export default InsideApp;
