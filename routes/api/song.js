
const Songs = require("../../models/songs")
const router = require("express").Router();

//Well that was a damn nightmare, but now we know how to do this...
//this return list of all songs, and has been shuffled.
//Can always revert, but having shuffling available is wise.
router.get("/shuffledSongs", async function (req, res) {
    let something = await Songs.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    res.json(scuffedFisherYates(docArray))
})

router.get("/allSongs", async function (req, res) {
    let something = await Songs.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    res.json(docArray);
})

//gets ID from the params, and rating from the body?
//Idk.
router.post("/rateSong/:id", async function (req, res) {
    let song = await Songs.findOne({ id: req.params.id }).exec();
    res.json(song)

})

router.get("/song/:id/:rating", async function (req, res) {
    let song = await (await Songs.findOne({ id: req.params.Id }).exec()).toObject();
    song.rating = newRating(song.rating, song.numOfRatings, req.params.rating);
    song.numOfRatings = 1 + song.numOfRatings;
    let realID = req.params.Id
    let ressy = await Songs.updateOne({ id: realID }, { rating: song.rating, numOfRatings: song.numOfRatings })
    console.log(ressy)
    res.json(song)




})

//parse ALL the floats
//essentially just returns a new overall rating given rating, amount of ratings, and a new rating.
function newRating(rating, numOfRatings, newRating) {
    let totalRatings = parseFloat(numOfRatings + 1)
    let totalRatingThing = (rating * parseFloat(numOfRatings)) + parseFloat(newRating)
    return parseFloat(((totalRatingThing) / (totalRatings)).toFixed(1))
}




module.exports = router;

function scuffedFisherYates(array) {
    //this must be static.
    let startingLen = array.length
    //unshift to this one.
    let returnArr = [];
    //initial vals.
    let tempVal;
    let roll;
    let spliced;
    //Do last iter at the end.
    //could be significantly condensed, but no point.
    for (let index = 0; index < startingLen - 1; index++) {
        //array.length MUST be continually updated.
        roll = Math.floor(Math.random() * array.length - 1)
        //roll should be 0-n.length-1.
        //splice returns the value taken out.
        spliced = array.splice(roll, 1)
        //copy sliced
        tempVal = Object.assign({}, spliced)
        //unshift slice into returnArr
        returnArr.unshift(tempVal)
    }
    //do last iteration outside of loop, cause effeciency.
    tempVal = Object.assign({}, array[0])
    returnArr.unshift(tempVal)
    //return the arr.
    return returnArr
}

