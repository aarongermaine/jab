const Users = require("../../models/user.js")
const router = require("express").Router();


router.get("/allUsers", async function (req, res) {
    console.log("made it!")
    let something = await Users.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    res.json(docArray);
})


module.exports = router;