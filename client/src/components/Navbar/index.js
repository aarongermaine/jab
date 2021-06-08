import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <nav className="sidenav">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="animate__zoomIn">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
