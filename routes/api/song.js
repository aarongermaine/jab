
const Songs = require("../../models/songs")
const Ratings = require("../../models/ratings")
const User = require("../../models/user");
// const { Rating } = require("../../models");
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

router.get("/allSongsDesc", async function (req, res) {
    let something = await Songs.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    docArray.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
    res.json(docArray);
})

router.get("/allRatings", async function (req, res) {
    let something = await Ratings.find();
    var docArray = something.map(function (model) { return model.toObject(); });
    res.json(docArray);
})

//pass songid and account id.
//or song spotify and account name?
//will only find first
router.get("/rating", async function (req, res) {
    let spotifySongId = req.body.id;
    let raterUsername = req.body.username;
    let userId;
    let songId1;
    console.log("got rating request")
    let user = await User.findOne({ username: raterUsername });
    if (user) {
        userId = user.id
    } else {
        res.status(404).send({ error: "user not found" })
    }
    let song = await Songs.findOne({ spotifyID: spotifySongId });
    console.log(song)

    if (song) {
        songId1 = song.id
    } else {
        res.status(404).send({ error: "song not found" })
    }
    let existingRating = await Ratings.findOne({ songId: songId1, accountId: userId })
    res.json(existingRating)
})



//Needs to be passed the spotify ID, the new rating, and the username of the person rating it.
router.post("/rateSong", async function (req, res) {
    let spotifySongId = req.body.id;
    let songRating = req.body.rating;
    let raterUsername = req.body.username;
    let userId;
    let songId1;
    console.log("got rating request")
    let user = await User.findOne({ username: raterUsername });
    if (user) {
        userId = user.id
    } else {
        res.status(404).send({ error: "user not found" })
    }
    let song = await Songs.findOne({ spotifyID: spotifySongId });
    console.log(song)
    if (song) {
        songId1 = song.id
    } else {
        res.status(404).send({ error: "song not found" })
    }
    console.log(typeof songId1, typeof userId)
    let existingRating = await Ratings.findOne({ songId: songId1, accountId: userId })

    if (existingRating) {
        //update rating
        let newRating = getNewRating(song.rating, song.numOfRatings, songRating - existingRating.rating, false)
        let response1 = await Ratings.updateOne({ _id: existingRating.id }, { rating: songRating })
        let ressy = await Songs.updateOne({ _id: songId1 }, { rating: newRating })
        res.json(ressy)
    } else {
        //add rating
        let newRating = new Ratings({ songId: songId1, accountId: userId, rating: songRating });
        newRating.save(function (err, result) { if (err) { console.log(err); } else { console.log(result) } })
        song.numOfRatings = 1 + song.numOfRatings;
        //update song's rating.
        song.rating = getNewRating(song.rating, song.numOfRatings, songRating, true);

        let ressy = await Songs.updateOne({ _id: songId1 }, { rating: song.rating, numOfRatings: song.numOfRatings })

        res.json(ressy)

    }


    // res.json(song)
})

// router.get("/song/:id/:rating", async function (req, res) {
//     console.log(req.body)
//     let song = await (await Songs.findOne({ id: req.params.Id }).exec()).toObject();
//     song.rating = newRating(song.rating, song.numOfRatings, req.params.rating);
//     song.numOfRatings = 1 + song.numOfRatings;
//     let realID = req.params.Id
//     let ressy = await Songs.updateOne({ id: realID }, { rating: song.rating, numOfRatings: song.numOfRatings })
//     console.log(ressy)
//     res.json(song)
// })



module.exports = router;


//parse ALL the floats
//essentially just returns a new overall rating given rating, amount of ratings, and a new rating.
function getNewRating(rating, numOfRatings, newRating, ratingChange) {
    let totalRatings = ratingChange ? numOfRatings + 1 : numOfRatings;
    let totalRatingThing = (rating * parseFloat(numOfRatings)) + parseFloat(newRating)
    return parseFloat(((totalRatingThing) / (totalRatings)).toFixed(1))
}



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
        //it looks at the index, the first argument.
        //And then it takes out x elements, second argument.
        spliced = array.splice(roll, 1)
        //copy sliced
        tempVal = Object.assign({}, spliced)
        //unshift slice into returnArr
        returnArr.unshift(tempVal)
    }
    //do last iteration outside of loop, cause effeciency.
    tempVal = Object.assign({}, array[0])
    //[3,9,7,5,4,2,1,0]
    returnArr.unshift(tempVal)
    //return the arr.
    return returnArr
}
