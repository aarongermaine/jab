import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav class="sidenav">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
