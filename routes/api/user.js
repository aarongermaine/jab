const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("passport");

router.route("/").get(authController.userLoggedIn);

router.route("/newUser").post(authController.userCreate);

router.route("/checkLogin").post(
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    let userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
);

router.route("/logout").post(authController.userLoggedOut);

module.exports = router;
