import axios from "axios";


export default {
  getSong: function (id) {
    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    // try { 
    // let returnVal = 
    return axios.get("/api/allSongs")
    //   return returnVal
    // } catch (err) {
    //   console.error(err);
    // }
  },
  getShuffledSongs: function () {
    return axios.get("/api/shuffledSongs")
  },
  //this won't work
  login: function (user, pw) {
    return axios.post("/login");
  },
  getRating: function (user, songId) {
    let data = { username: user, id: songId }
    return axios.post("/api/rating", { username: user, id: songId })
  },
  sendRating: function (user, songId, rating) {
    //    let spotifySongId = req.body.id;
    // let songRating = req.body.rating;
    // let raterUsername = req.body.username;
    return axios.post("/api/rateSong", { username: user, id: songId, rating: rating })
  }


  // getRating: function (user, songId) {
  //   console.log(axios("api/rating", {
  //     method: 'post',
  //     headers: { "Content-Type": "text/plain" },
  //     body: {
  //       id: songId, // This is the body part
  //       username: user
  //     }
  //   }));
  // }


  //Shit from stackOverflow.
  // axios({
  //   method: 'post',
  //   url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
  //   headers: {}, 
  //   data: {
  //     foo: 'bar', // This is the body part
  //   }
  // });
};


