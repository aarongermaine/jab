import React, { useEffect } from "react";

import { Link } from "react-router-dom";
// utils global state to add rating - import { useStoreContext } from "";
// import { RATE_POST } from "../../utils/?";
import API from "../../utils/API";

function SongList() {
  const getSongs = () => {
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

  return (
    <div>
      <h1>Now Playing:</h1>
      <span>{state.songs}</span>
    </div>
  );
}

export default SongList;
