import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

import SideNav from "../components/Navbar";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./logo1.png";
import "../styles/App.css";

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
              <Route exact path="/" component={Home} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
