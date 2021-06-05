import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Login from "../components/Login/index";

const LoginUser = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
