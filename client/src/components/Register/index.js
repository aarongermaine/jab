import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import submitDataAPI from "../../utils/API";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./style.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheckVal, setPassCheckVal] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [passwordCheck, setPassCheck] = useState(false);

  const hangleSubmit = (event, firstName, lastName, email, password) => {
    event.preventDefault();
    if ([firstName, lastName, email, password].some((val) => val === "")) {
      return alert("Please fill all fields");
    } else {
      //  send values as object i.e submitDataAPI.postUserData({
      //           firstName, lastName, email, password
      //       })
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheckVal") {
      setPassCheckVal(value);
    } else if (name === "firstName") {
      setFirst(value);
    } else if (name === "lastname") {
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
          <Form.Label column sm={2} htmlFor="emailLogin">
            {" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              className="form-control w-75"
              id="emailLogin"
              name="email"
              value={email}
              aria-describedby="emailHelp"
              placeholder="Email"
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
                    hangleSubmit(event, firstName, lastName, email, password)
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
