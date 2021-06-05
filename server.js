const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
<<<<<<< HEAD
let createError = require("http-errors");
let cookieParser = require("cookie-parser");

let logger = require("morgan");
=======
const mongoose = require("mongoose")
const myRoutes = require('./routes/index.js');
>>>>>>> d95d8d5e41b794fc0aa76e6424827007128b67e7

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
app.use(cookieParser());

=======
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/songRatingList"
);

// require('./routes/api/song.js')(app);
app.use("/", myRoutes)
>>>>>>> d95d8d5e41b794fc0aa76e6424827007128b67e7
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
