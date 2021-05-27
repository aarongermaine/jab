import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./components/HomePage";
//import logo from "./logo.svg";
import "./App.css";

//use swtich and react router here
//go with login as the default
//use context to figure signed in/sign out
//use that to continue redirection.
//leverage the react context API to figure the logged in stuff.
//
function App() {
  return (
    <Router>
      <div>
        <Home>
          <HomePage></HomePage>
        </Home>
      </div>
    </Router>
  );
}

export default App;
