import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import res from "../../utils/API";
import "./style.css";

function Login() {
  return (
    <Container style={{ width: "75%" }}>
      <Form className="loginForm">
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="emailLogin">
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              className="form-control w-75"
              id="emailLogin"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
