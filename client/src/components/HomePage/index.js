import React from "react";
// import utils from "../../utils/API.js"
import Container from "react-bootstrap/Container";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";

// utils global state to add rating - import { useStoreContext } from "";
// import { RATE_POST } from "../../utils/?";
// import API from "../../utils/API";

function SongList() {
  /* const getSongs = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then((results) => {
        dispatch({
          type: UPDATE_SONGS,
          songs: results.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSongs();
  }, []);

  */
  console.log(API.getSongs());
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
