//import axios from "axios";


export default {
  getSong: function (id) {

    return axios.get("/api/song/" + id);
  },
  getSongs: function () {
    return axios.get("/api/allSongs");
  }
};
*/

const res = fetch("/login", {
  method: "POST",
  body: JSON.stringify,
  headers: { "Content-Type": "application/json" },
});

export default res;
