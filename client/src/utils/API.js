import axios from "axios";

export default {

    APICall: function() {
       return axios({
            url: "http://localhost:3001/api",
            method: "GET",
          });
    }
};
  

