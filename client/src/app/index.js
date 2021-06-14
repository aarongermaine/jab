import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "../pages/Home";
import Login from "../components/Login";
import SideNav from "../components/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Register from "../components/Register";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./logo1.png";
import "../styles/App.css";

let loggedin = localStorage.getItem("loggedIn") ? true : false;
console.log(loggedin);
function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col sm={1}>
            <SideNav />
          </Col>
          <Col sm={11}>
            <Navbar>
              <img
                src={logo}
                width="120"
                height="90"
                alt="Jab"
                style={{ margin: "auto" }}
              />
            </Navbar>
            <Switch>
              <Route exact path="/">
                {loggedin ? <Home /> : <Redirect to="/login" />}
              </Route>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
