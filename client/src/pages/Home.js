import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Arrow from "../components/Arrow/index";
import RatingButton from "../components/RatingButton/index"
import Header from "../components/Header/index"
import SongIFrame from "../components/SongIFrame/index";

const Home = () => {
  //Handle button presses here?
  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-8"><Header /></Col>
      </Row>
      <Row>
        <Col size="md-8">
          <SongIFrame spotifyID={"5lFDtgWsjRJu8fPOAyJIAK"} />
        </Col>
      </Row>
      <Row>
        <Col size="md-2"></Col>
        <Col size="md-9">
          <Arrow left={true} />
          <RatingButton rating={1} />
          <RatingButton rating={2} />
          <RatingButton rating={3} />
          <RatingButton rating={4} />
          <RatingButton rating={5} />
          <Arrow left={false} />
        </Col>
      </Row>
    </Container >
  );
};

export default Home;
