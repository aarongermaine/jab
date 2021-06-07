import React from "react";
import logo from "./logo1.png";

function Register() {
  return (
    <div className="App">
      <div class="sidenav">
        <a href="/">Home</a>
        <a href="#">Login</a>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );

  export default Login;
}
