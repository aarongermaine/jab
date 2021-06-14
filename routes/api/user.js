const router = require("express").Router();
const User = require("../../models/user");

//lookup all
router.get("/allAccounts", async function (req, res) {
  let something = await User.find();
  var docArray = something.map(function (model) {
    return model.toObject();
  });
  res.json(docArray);
});

//lookup 1
router.post("/user", async function (req, res) {
  console.log("got request for", req.body.username);
  let username1 = req.body.username;
  let something = await User.findOne({ username: username1 });
  console.log(something);
  res.json(something);
});
router.post("/login", async function (req, res) {
  console.log("got request for", req.body.username);
  console.log("pw", req.body.password);
  await User.findOne({ username: req.body.username })
    .then((userObj) => {
      console.log(userObj);
      if (userObj) {
        return userObj.checkPassword(req.body.password);
      } else {
        return false;
      }
    })
    .then((data) => {
      console.log("something", data);
      res.json(data);
    });
});

//create
router.put("/user", async function (req, res) {
  await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json("Successfully created new user!");
});

module.exports = router;
