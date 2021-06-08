import axios from "axios";


export default {
  getSong: function (id) {
    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    try {
      let returnVal = axios.get("/api/allSongs")
      return returnVal
    } catch (err) {
      console.error(err);
    }
  },
  getShuffledSongs: function () {
    return axios.get("/api/shuffledSongs")
  },
  login: function (user, pw) {
    return axios.post("/login");
  }
};


