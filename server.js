const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

let createError = require("http-errors");
let cookieParser = require("cookie-parser");

let logger = require("morgan");

const mongoose = require("mongoose")
const myRoutes = require('./routes/index.js');


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/songRatingList"
);

// require('./routes/api/song.js')(app);
app.use("/", myRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
