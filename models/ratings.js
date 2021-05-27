const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingsSchema = new Schema({
    songId: { type: Number, required: true },
    accountId: { type: Number, required: true },
    rating: { type: Number, required: true }
});

const Rating = mongoose.model("Rating", ratingsSchema);

module.exports = Rating;