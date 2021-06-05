import React from "react";
import "./style.css";
import logo from "../HomePage/logo1.png";
import res from "../../utils/API";

function Login() {
  return (
    <div className="App">
      <div class="sidenav">
        <a href="/" class="animate__zoomIn">
          Home
        </a>
        <a href="#" class="animate__zoomIn">
          Login
        </a>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <label for="exampleInputPassword1">Password </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <br></br>
        <div>
          <ul>
            <li>
              <span onClick={res}>Submit</span>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
export default Login;
