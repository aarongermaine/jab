import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import SongList from "../components/HomePage/index";
import Rating from "../components/Rating/index";
import Arrows from "../components/Arrows/index";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <SongList />
          <Arrows />
          <Rating />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
