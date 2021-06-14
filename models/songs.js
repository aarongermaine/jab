const mongoose = require("mongoose");
const { Schema } = mongoose;

const songRatingSchema = new Schema({
  songTitle: { type: String, required: true },
  spotifyId: { type: String, required: true, min: 22, max: 22 },
  //we're going to want Number to just have 1 decimal place, I think.
  //
  artists: { type: String, required: true },
  rating: { type: Number, required: true },
  numOfRatings: { type: Number, required: true },
  genre: { type: String, required: true },
  attribute: { type: String, required: true },
});

const Song = mongoose.model("Song", songRatingSchema);

module.exports = Song;
