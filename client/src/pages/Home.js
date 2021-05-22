import React from "react";
import { Col, Row, Container } from "../components/Grid";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <HomePage />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
