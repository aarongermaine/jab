const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingsSchema = new Schema({
  songId: { type: String, required: true },
  accountId: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Rating = mongoose.model("Rating", ratingsSchema);

module.exports = Rating;
