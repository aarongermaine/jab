import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "../AuthButton/authenticationButton";

function SideNav() {
  return (
    <nav className="sidenav">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="animate__zoomIn">
            <AuthenticationButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
