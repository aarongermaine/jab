import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style.css";
import API from "../../utils/API";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event, username, password) => {
    event.preventDefault();
    if ([username, password].some((val) => val === "")) {
      return alert("Please fill all fields");
    } else {
      API.login(username, password).then((data) => {
        console.log(data.data);
        if (data.data === true) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("user", username);
          window.location.replace("/");
        } else {
          alert("password incorrect, try again");
        }
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

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
              id="username"
              name="username"
              aria-describedby="usernameHelp"
              placeholder="Enter username"
              onChange={(event) => handleChange(event)}
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
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col sm={2} />
          <Col sm={10}>
            <Row className="w-100 p-0">
              <Col>
                <Button
                  onClick={(event) => handleSubmit(event, username, password)}
                  className="w-50 btn-info"
                >
                  Submit
                </Button>
              </Col>
              <Col>
                <Link to="/register">
                  <Button className="w-50 btn-warning">Sign up</Button>
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
