import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Jab</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
{/*           
          <iframe src="https://open.spotify.com/embed/track/2IRZnDFmlqMuOrYOLnZZyc" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
        </p>
      </div>
    );
  }
}

export default App;
