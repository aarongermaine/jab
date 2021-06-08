import axios from "axios";

export default {
  getSong: (id) => axios.get("/api/song/" + id),
  getSongs: () => axios.get("/api/allSongs"),
  getUser: () => axios.get("/user/"),
  postUserData: (newUserData) => axios.post("/user/newUser", newUserData),
  postUserLogin: (loginInput) => axios.post("/user/checkLogin", loginInput),
  postLogout: (logoutUser) => axios.post("/user/logout", logoutUser),
};

// const res = fetch("/login", {
//   method: "POST",
//   body: JSON.stringify,
//   headers: { "Content-Type": "application/json" },
// });

// export default res;
