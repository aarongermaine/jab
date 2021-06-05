const Users = require("../../models/user.js")
const router = require("express").Router();


router.get("/allUsers", async function (req, res) {
    console.log("made it!")
    let something = await Users.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    res.json(docArray);
})

//send username and bcrypt hashed password in request.
router.post("/login", async function (req, res) {
    console.log(req.body)
    let something = await Users.findOne({ username: req.body.username });
    console.log(something)
    if (something.password === req.body.password) {
        console.log("should log in!")
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})


module.exports = router;