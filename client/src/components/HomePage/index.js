import React from "react";
import logo from "../HomePage/logo1.png";
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

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </div>
      <p className="App-intro">
        <iframe
          src="https://open.spotify.com/embed/track/2IRZnDFmlqMuOrYOLnZZyc"
          width="300"
          height="400"
          frameborder="10"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </p>
    </div>
  );
}

export default SongList;
