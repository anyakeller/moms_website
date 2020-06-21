import React from "react";

function Navbar(props) {
  // return navbar
  return (
    <ul className="nav justify-content-end">
      {props.navLinks.map(link => (
        <li className="nav-item">
          <a className="nav-link" href={"/" + link.route}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
