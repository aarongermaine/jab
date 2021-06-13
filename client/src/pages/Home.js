import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Arrow from "../components/Arrow/index";
import RatingButton from "../components/RatingButton/index";
import SongIFrame from "../components/SongIFrame/index";
import API from "../utils/API";

let val = 0;
class Home extends React.Component {
  constructor(props) {
    document.body.classList.add("thing");
    super(props);
    this.state = { user: "root", songsGotten: val };
    console.log("state", this.state);
    this.getSongsOnce().then((data) => {
      let songsArray = [];
      let songs = data.data;
      console.log(songs);
      //Need to retranslate the API call into a better array.
      //This is how we do it.
      //The other way just doesn't work
      for (const key in songs) {
        const element1 = songs[key];
        if (element1["0"]) {
          songsArray.push(element1["0"]);
        } else {
          songsArray.push(element1);
        }
      }
      console.log(songsArray);

      if (songsArray) {
        val = 1;
        this.setState({ songsGotten: 1, songs: songsArray, index: 0 });
      }

      this.getRating().then((data) => {
        console.log(data);
      });
      this.generateStars(null);
      this.setState({ complete: 1 });
      console.log("state", this.state);
      document.body.classList.remove("thing");
    });
  }

  async getSongsOnce() {
    if (!this.state.songsGotten) {
      return this.tryGetSongs();
    } else {
      return 0;
    }
  }

  tryGetSongs = () => API.getShuffledSongs();

  //Overshoot it to compensate?
  //Just tell it to fix itself?

  //Look into length bs
  //Please future brandon, don't let me down.
  goUpOneSong = () => {
    this.setState((state) => {
      if (state.index === state.songs.length - 1) {
        return { index: 0 };
      } else {
        return { index: state.index + 1 };
      }
    });
  };

  goDownOneSong = () => {
    this.setState((state) => {
      if (state.index === 0) {
        return { index: state.songs.length - 1 };
      } else {
        return { index: state.index - 1 };
      }
    });
  };

  sendRating = (rating) => {
    let symbolArr = [];
    // API.getSong(data.data.songId).then((data) => console.log("songData", data))
    for (let index = 0; index < 5; index++) {
      let actual = index + 1;
      if (actual <= Math.floor(rating)) {
        symbolArr.push(true);
      } else {
        symbolArr.push(false);
      }
    }
    this.setState({ filledStar: symbolArr });
    return API.sendRating(
      this.state.user,
      this.state.songs[this.state.index].spotifyID,
      rating
    );
  };

  //so I need a get rating, and a send rating.
  //One for grey stars, one for filled. Default is white.
  //Okay ascii only has black and white stars.
  //So screw it.
  getRating = (optionalIndexOverride) => {
    if (optionalIndexOverride) {
      return API.getRating(
        this.state.user,
        this.state.songs[optionalIndexOverride].spotifyID
      );
    } else {
      return API.getRating(
        this.state.user,
        this.state.songs[this.state.index].spotifyID
      );
    }
  };

  generateStars = (backward) => {
    let realIndex = null;
    if (backward === true) {
      if (this.state.index === 0) {
        realIndex = this.state.songs.length - 1;
      } else {
        realIndex = this.state.index - 1;
      }
    } else if (backward === false) {
      if (this.state.index === this.state.songs.length - 1) {
        realIndex = 0;
      } else {
        realIndex = this.state.index + 1;
      }
    }
    let symbolArr = [];
    this.getRating(realIndex)
      .then((data) => {
        console.log("rating", data.data);
        if (data.data != null) {
          console.log(Math.floor(data.data.rating));
          API.getSong(data.data.songId).then((data) =>
            console.log("songData", data)
          );
          for (let index = 0; index < 5; index++) {
            let actual = index + 1;
            if (actual <= Math.floor(data.data.rating)) {
              symbolArr.push(true);
            } else {
              symbolArr.push(false);
            }
          }
        }
      })
      .then(() => {
        this.setState({ filledStar: symbolArr });
      });
  };

  render() {
    if (this.state.index !== undefined && this.state.filledStar !== undefined) {
      return (
        <Container fluid>
          <Row>
            <Col size="md-4"></Col>
            <Col size="md-8">
              <SongIFrame
                spotifyID={this.state.songs[this.state.index].spotifyID}
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-4"></Col>
            <Col size="md-4">
              <Arrow
                left={true}
                state={this.state}
                changeSong={this.goDownOneSong}
                generateStars={this.generateStars}
              />
              {/* {this.generateStars()} */}
              <RatingButton
                rating={1}
                state={this.state}
                filled={this.state.filledStar[0]}
                sendRating={this.sendRating}
                generateStars={this.generateStars}
              />
              <RatingButton
                rating={2}
                state={this.state}
                filled={this.state.filledStar[1]}
                sendRating={this.sendRating}
                generateStars={this.generateStars}
              />
              <RatingButton
                rating={3}
                state={this.state}
                filled={this.state.filledStar[2]}
                sendRating={this.sendRating}
                generateStars={this.generateStars}
              />
              <RatingButton
                rating={4}
                state={this.state}
                filled={this.state.filledStar[3]}
                sendRating={this.sendRating}
                generateStars={this.generateStars}
              />
              <RatingButton
                rating={5}
                state={this.state}
                filled={this.state.filledStar[4]}
                sendRating={this.sendRating}
                generateStars={this.generateStars}
              />
              <Arrow
                left={false}
                state={this.state}
                changeSong={this.goUpOneSong}
                generateStars={this.generateStars}
              />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <Container fluid></Container>;
    }
  }
}

export default Home;
