import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index.js";
import * as serviceWorkerRegistration from "./utils/serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorkerRegistration.register();
