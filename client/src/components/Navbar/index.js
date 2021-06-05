import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="sidenav">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li class="animate__zoomIn">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
