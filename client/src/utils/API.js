import axios from "axios";

export default {
  getactive: function (query) {
    return axios.get("/active/" + query);
  },
};
