import axios from "axios";
export default {
  getSong: function (id) {
    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    return axios.get("/api/allSongs");
  },
  getShuffledSongs: function () {
    return axios.get("/api/shuffledSongs");
  },
  getRating: function (user, songId) {
    return axios.post("/api/rating", { username: user, id: songId });
  },
  sendRating: function (user, songId, rating) {
    return axios.post("/api/rateSong", {
      username: user,
      id: songId,
      rating: rating,
    });

  },
  getUser: function (user) {
    return axios.post("/users/user", { username: user });
  },
  login: function (user, pw) {
    return axios.post("/users/login", { username: user, password: pw });
  },
  createNewUser: function (user, pw) {
    return axios.put("/users/user", { username: user, password: pw });
  },
};
