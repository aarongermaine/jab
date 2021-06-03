import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Register from "../components/Register/index";

const RegisterUser = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterUser;
