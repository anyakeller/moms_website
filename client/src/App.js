import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import InsideApp from "./InsideApp";

// for the background color and stuff that doesn't change
const App = () => {

  /*
  const location = useLocation();
  React.useEffect(() => {
    console.log("Location changed");
  }, [location]);
  */
  return (
    <Router>
      <InsideApp/>
    </Router>
  );
}

      //<Navbar routes={ROUTES} />

export default App;
