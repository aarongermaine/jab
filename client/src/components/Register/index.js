import React, { useState } from "react";
import { Link } from "react-router-dom";
import submitDataAPI from "../../utils/API";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./style.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheckVal, setPassCheckVal] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  //const [passwordCheck, setPassCheck] = useState(false);

  const handleSubmit = (event, firstName, lastName, username, password) => {
    event.preventDefault();
    if ([firstName, lastName, username, password].some((val) => val === "")) {
      return alert("Please fill all fields");
    } else {
      submitDataAPI.postUserData.toString({
        firstName,
        lastName,
        username,
        password,
      });
      //  send values as object i.e submitDataAPI.postUserData({
      //           firstName, lastName, username, password
      //       })
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheckVal") {
      setPassCheckVal(value);
    } else if (name === "firstName") {
      setFirst(value);
    } else if (name === "lastName") {
      setLast(value);
    }
  };

  return (
    <Container style={{ width: "75%" }}>
      <Form className="registerForm">
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="firstLogin"></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              className="form-control w-75"
              id="firstLogin"
              name="firstName"
              value={firstName}
              aria-describedby="first name"
              placeholder="First name"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="lastLogin"></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              className="form-control w-75"
              id="lastLogin"
              name="lastName"
              value={lastName}
              aria-describedby="last name"
              placeholder="Last name"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="usernameLogin">
            {" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="username"
              className="form-control w-75"
              id="usernameLogin"
              name="username"
              value={username}
              aria-describedby="usernameHelp"
              placeholder="Username"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="passwordLogin">
            {" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              className="form-control w-75"
              id="passwordLogin"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={2} htmlFor="passwordLoginCheck">
            {" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              className="form-control w-75"
              id="passwordLoginCheck"
              name="passwordCheckVal"
              value={passwordCheckVal}
              placeholder="Re-enter Password"
              onChange={(event) => handleChange(event)}
            />
          </Col>
        </Form.Group>
        <br />
        <Row>
          <Col sm={2} />
          <Col sm={10}>
            <Row className="w-100 p-0">
              <Col>
                <Button
                  onClick={(event) =>
                    handleSubmit(event, firstName, lastName, username, password)
                  }
                  disabled={password === passwordCheckVal ? false : true}
                  className="w-50 btn-info"
                >
                  Submit
                </Button>
              </Col>
              <Col>
                <Link to="/login">
                  <Button className="w-50 btn-warning">Login</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <br />
      <Row></Row>
    </Container>
  );
}
export default Register;
