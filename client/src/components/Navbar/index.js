import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  function clearStorage() {
    localStorage.clear()
    window.location.replace("/");
  }
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
          <li className="animate__zoomIn">
            <a href="" onClick={clearStorage}>Logout</a>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
