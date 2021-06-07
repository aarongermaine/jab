import axios from "axios";


export default {
  getSong: function (id) {

    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    return axios.get("/api/allSongs");
  },
  login: function (user, pw) {
    return axios.post("/login");
  }
};


