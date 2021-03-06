require("dotenv").config();
const express = require("express");

// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// const logger = require("morgan");

const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
const logger = require("morgan");

const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
// const passport = require("./scripts/config");
// const createError = require("http-errors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.bodyParser());

const mongoose = require("mongoose");
const myRoutes = require("./routes/index.js");

app.use(myRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(logger("dev"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.static(path.join(__dirname, "client")));

app.use(
  session({
    secret: "secret",
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGODB_URI ||
        "mongodb+srv://brandon:xUUjvi9SPfCDpqOw@brandonscluster.f6shj.mongodb.net/song_db?retryWrites=true&w=majority",
    }),
    resave: false,
    saveUninitialized: true,
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://brandon:xUUjvi9SPfCDpqOw@brandonscluster.f6shj.mongodb.net/song_db?retryWrites=true&w=majority"
);

// require('./routes/api/song.js')(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));

process.on("exit", () => {
  console.log("exiting…");
  return process.exit();
});

// process.once("SIGUSR2", () => process.kill(process.pid, "SIGUSR2"));

// process.on("SIGINT", () => process.kill(process.pid, "SIGINT"));
