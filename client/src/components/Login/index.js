import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style.css";

import res from "../../utils/API";

function Login() {
  return (
    <Container style={{ width: "75%" }}>
      <Form className="loginForm">
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="usernameLogin">
            Username
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="username"
              className="form-control w-75"
              id="usernameLogin"
              aria-describedby="usernameHelp"
              placeholder="Enter username"
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="passwordLogin">
            Password{" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              className="form-control w-75"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col sm={2} />
          <Col sm={10}>
            <Row className="w-100 p-0">
              <Col>
                <Button onClick={res} className="w-50 btn-info">
                  Submit
                </Button>
              </Col>
              <Col>
                <Link to="/register">
                  <Button onClick={res} className="w-50 btn-warning">
                    Sign up
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Form.Group>
      </Form>
      <br />
    </Container>
  );
}
export default Login;
