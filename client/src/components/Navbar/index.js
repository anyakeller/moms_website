import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar(props) {
  return (
    <ul className="nav justify-content-end">
      {props.routes.map((route, key) => (
        <li className="nav-item" key={key}>
          <NavLink
            activeClassName="active-nav"
            className="nav-link"
            exact
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
