import axios from "axios";

export default {
  getSong: function (id) {
    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    try {
      let returnVal = axios.get("/api/allSongs");
      return returnVal;
    } catch (err) {
      console.error(err);
    }
  },
  getShuffledSongs: function () {
    return axios.get("/api/shuffledSongs");
  },
  res: function () {
    return axios.get("/api/login", {
      method: "POST",
      body: JSON.stringify,
      headers: { "Content-Type": "application/json" },
    });
  },
  postUserData: (newUserData) => axios.post("/user/newUser", newUserData),
  postUserLogin: (loginInput) => axios.post("/user/checkLogin", loginInput),
  postLogout: (logoutUser) => axios.post("/user/logout", logoutUser),
};
