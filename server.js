const express = require("express");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const PORT = 3001;
const app = express();

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// app.use(express.bodyParser());

const mongoose = require("mongoose");
const myRoutes = require("./routes/index.js");

app.use(myRoutes);

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(logger("dev"));
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

// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/songRatingList"
);

// require('./routes/api/song.js')(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
