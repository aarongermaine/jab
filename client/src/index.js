import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain="dev-5uq-pnd6.us.auth0.com"
      clientId="8QN5ydRCG83bcCnmU2pCzMskN7XWnwVe"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
