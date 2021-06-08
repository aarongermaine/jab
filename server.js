require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
const passport = require("./scripts/config");
const createError = require("http-errors");
const PORT = 3001;
const app = express();

const mongoose = require("mongoose");
const myRoutes = require("./routes/index.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger("dev"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "secret",
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/jab-app",
    }),
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(myRoutes);

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));

process.on("exit", () => {
  console.log("exiting…");
  return process.exit();
});

process.once("SIGUSR2", () => process.kill(process.pid, "SIGUSR2"));

process.on("SIGINT", () => process.kill(process.pid, "SIGINT"));
