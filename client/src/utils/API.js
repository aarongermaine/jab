import axios from "axios";

export default {
  getSong: function () {
    return axios.get("/api/song/" + id);
  },
};
