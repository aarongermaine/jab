const passport = require("passport");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
// const { models } = require("../db/models");


module.exports = {
  userCreate: (req, res) => {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  login: (req, res) => {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    passport.authenticate("local");
    ((req, res) => {
      console.log("logged in", req.user);
      var userInfo = {
        username: req.user.username,
      };
      res.send(userInfo);
    })(req, res);
  },
  userLoggedIn: (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.json({ user: null });
    }
  },
  userLoggedOut: (req, res) => {
    if (req.user) {
      req.logout();
      res.send({ msg: "logging out" });
    } else {
      res.send({ msg: "no user to log out" });
    }
  },
};
