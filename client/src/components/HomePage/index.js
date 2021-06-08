import React from "react";
// import utils from "../../utils/API.js"
import Container from "react-bootstrap/Container";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";

function SongList() {
  return (
    <div className="App">
      <Container className="App-intro">
        <iframe
          src="https://open.spotify.com/embed/track/2IRZnDFmlqMuOrYOLnZZyc"
          width="800"
          height="400"
          frameBorder="10"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Container>
    </div>
  );
}

export default SongList;
