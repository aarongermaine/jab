const mongoose = require("mongoose");
const { User } = require("../models");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/songRatingList"
);

//spotify:track:2IRZnDFmlqMuOrYOLnZZyc

const userSeed = [
    {
        username: "root",
        password: "root",
        email: "roo@roo.com"
    }
]

const songSeed = [
    {
        songTitle: "Going Bad (feat. Drake)",
        spotifyID: "2IRZnDFmlqMuOrYOLnZZyc",
        artists: "Meek Mill",
        rating: 5,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Back To Back",
        spotifyID: "5lFDtgWsjRJu8fPOAyJIAK",
        artists: "Drake",
        rating: 4,
        numOfRatings: 12,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Dreams and Nightmares",
        spotifyID: "42zd6DYQ4o4SECmTITrM1U",
        artists: "Meek Mill",
        rating: 3,
        numOfRatings: 8,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "War",
        spotifyID: "1I55Ea0zVoSKs6MqW7DQ3i",
        artists: "Drake",
        rating: 2.5,
        numOfRatings: 15,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "The Box",
        spotifyID: "0nbXyq5TXYPCO7pr3N8S4I",
        artists: "Roddy Ricch",
        rating: 3,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Stronger",
        spotifyID: "4fzsfWzRhPawzqhX8Qt9F3",
        artists: "Kanye West",
        rating: 4.0,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Intro",
        spotifyID: "3EQ9QP2E7wjYQba8OSPBst",
        artists: "Meek Mill",
        rating: 48.0,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Power",
        spotifyID: "2gZUPNdnz5Y45eiGxpHGSc",
        artists: "Kanye West",
        rating: 4.0,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "I'm Upset",
        spotifyID: "3qN5qMTKyEEmiTZD38BNTT",
        artists: "Drake",
        rating: 1.5,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Jumpman",
        spotifyID: "27GmP9AWRs744SzKcpJsTZ",
        artists: "Drake",
        rating: 0.0,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Disco Inferno",
        spotifyID: "69bHJ9qs5FrUJbKP8xU8uZ",
        artists: "50 Cent",
        rating: 22.0,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "That's Life",
        spotifyID: "4FmCUATNIarCQh72JYdvnm",
        artists: "Frank Sinatra",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "Amo Bishop Roden",
        spotifyID: "1oeovPFdMfedh7VpbXg6YP",
        artists: "Boards of Canada",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Chill",
        attribute: ""
    },
    {
        songTitle: "Beyond the Sea",
        spotifyID: "3KzgdYUlqV6TOG7JCmx2Wg",
        artists: "Bobby Darin",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "Sway (Quien Sera)",
        spotifyID: "3QyPsavxL681NX7SPVGd5T",
        artists: "Dean Martin",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "W.I.G.T.S.",
        spotifyID: "0LuCswQI54QlK6EVez06Bw",
        artists: "S.Maharba",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Chill",
        attribute: ""
    },
    {
        songTitle: "Wen 222",
        spotifyID: "2dv0kUfBzoEIQKoHt9ygYs",
        artists: "Shlohmo",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Rap",
        attribute: ""
    },
    {
        songTitle: "Open Arms",
        spotifyID: "2w4EpqGasrz9qdTwocx54t",
        artists: "Com Truise",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "All I Need",
        spotifyID: "5Qv2Nby1xTr9pQyjkrc94J",
        artists: "Radiohead",
        rating: 0,
        numOfRatings: 0,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "Age of Consent - 2015 remaster",
        spotifyID: "2EEinN4Zk8MUv4OQuLsTBj",
        artists: "New Order",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    },
    {
        songTitle: "Slow This Bird Down",
        spotifyID: "3htO9aATRyGh3SC72v91hW",
        artists: "Boards of Canada",
        rating: 4.5,
        numOfRatings: 10,
        genre: "Pop",
        attribute: ""
    }
    // ,
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },
    // {
    //     songTitle: "",
    //     spotifyID: "",
    //     artists: "",
    //     rating: 4.5,
    //     genre: "Rap",
    //     attribute: ""
    // },

];

db.Song
    .remove({})
    .then(() => db.Song.collection.insertMany(songSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
    });

const SingleUserSeed = new User(userSeed[0]);
db.User
    .remove({})
    .then(() => SingleUserSeed.save())
    .then(data => {

        console.log("1 records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });