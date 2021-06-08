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
      console.log("songs", this.state.songs)
      console.log("total songs data", this.state)
      document.body.classList.remove("thing")
    })
    // while (!this.state.songs) { }
    console.log("cur state", this.state)
  }

  setSongState(res) {
    this.state.songs = res
  }
  async getSongsOnce() {
    if (!this.state.songsGotten) {
      return this.tryGetSongs()
      // let thing;
      // let songs = this.tryGetSongs()
      //   .then((data) => thing = data)
      //   .catch((err) => { throw (err) })
      // console.log("thing", thing)
      // console.log("songs", songs)
      // return this.tryGetSongs()
    } else {
      return 0;
    }
  }

  tryGetSongs = () => API.getSongs()

  render() {

    return (
      < Container fluid >
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
    )

  }
}


// const Home = () => {
//   //Handle button presses here?
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-3"></Col>
//         <Col size="md-8"><Header /></Col>
//       </Row>
//       <Row>
//         <Col size="md-8">
//           <SongIFrame spotifyID={"5lFDtgWsjRJu8fPOAyJIAK"} />
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-2"></Col>
//         <Col size="md-9">
//           <Arrow left={true} />
//           <RatingButton rating={1} />
//           <RatingButton rating={2} />
//           <RatingButton rating={3} />
//           <RatingButton rating={4} />
//           <RatingButton rating={5} />
//           <Arrow left={false} />
//         </Col>
//       </Row>
//     </Container >
//   );
// };

export default Home;
