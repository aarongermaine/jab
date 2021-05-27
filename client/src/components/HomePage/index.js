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
      <div class="sidenav">
        <a href="#">Home</a>
        <a href="#">My Favorites</a>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        <iframe
          src="https://open.spotify.com/embed/track/2IRZnDFmlqMuOrYOLnZZyc"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </p>
    </div>
  );
}

export default SongList;
