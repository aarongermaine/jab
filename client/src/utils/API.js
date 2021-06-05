//import axios from "axios";

/* export default {
  getSong: function () {
    return axios.get("/api/song/" + id);
  },
};
*/

const res = fetch("/login", {
  method: "POST",
  body: JSON.stringify,
  headers: { "Content-Type": "application/json" },
});

export default res;
