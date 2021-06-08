const router = require("express").Router();
const userController = require("../../controllers/controller");
const passport = require("passport");

router.route("/").get(userController.userLoggedIn);

router.route("/newUser").post(userController.userCreate);

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

router.route("/logout").post(userController.userLoggedOut);

module.exports = router;
