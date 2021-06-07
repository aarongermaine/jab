import React from "react";

function SongIFrame(props) {
  let song = "https://open.spotify.com/embed/track/" + props.spotifyID
  return (
    <iframe
      src={song}
      width="300"
      height="400"
      frameborder="10"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default SongIFrame;
