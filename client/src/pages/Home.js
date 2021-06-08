import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Arrow from "../components/Arrow/index";
import RatingButton from "../components/RatingButton/index"
import Header from "../components/Header/index"
import SongIFrame from "../components/SongIFrame/index";
import API from "../utils/API"

// async function getSongs() {
//   return await API.getSongs()
// }
// let l = getSongs()
// console.log(l)

let val = 0
class Home extends React.Component {
  constructor(props) {
    document.body.classList.add("thing")
    super(props)
    this.state = { songsGotten: val }
    this.getSongsOnce().then((data) => {
      let songs = this.getSongsOnce()
      console.log("result of promise", songs)
      if (songs) {
        val = 1
        this.state = { songsGotten: 1, songs: data }
      }
      // console.log(API.getSongs())
      // console.log("songs", this.state.songs)
      // console.log("total songs data", this.state)
      document.body.classList.remove("thing")
      console.log("cur state", this.state.songs.data)
    })

  }

  async getSongsOnce() {
    if (!this.state.songsGotten) {
      return this.tryGetSongs()
    } else {
      return 0;
    }
  }

  tryGetSongs = () => API.getShuffledSongs()

  render() {

    return (
      < Container fluid >
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-8">
            <SongIFrame spotifyID={"5lFDtgWsjRJu8fPOAyJIAK"} />
          </Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <Arrow left={true} state={this.state} />
            <RatingButton rating={1} state={this.state} />
            <RatingButton rating={2} state={this.state} />
            <RatingButton rating={3} state={this.state} />
            <RatingButton rating={4} state={this.state} />
            <RatingButton rating={5} state={this.state} />
            <Arrow left={false} state={this.state} />
          </Col>
        </Row>
      </Container >
    )

  }
}


export default Home;
