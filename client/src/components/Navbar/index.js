import React from "react";
import {NavLink} from "react-router-dom";
import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  // return navbar
  render() {
    return (
      <ul className="nav justify-content-end">
        {this.props.routes.map((route,key) => (
          <li className="nav-item" key={key}>
            <NavLink activeClassName="active-nav" className="nav-link" exact to={route.path}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navbar;
