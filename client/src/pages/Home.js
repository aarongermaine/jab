import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import SongList from "../components/HomePage/index";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <SongList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
