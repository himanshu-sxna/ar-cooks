import axios from "axios";

export default {

    getJournals: function() {
       return axios({
            url: "/api/journal",
            method: "GET",
          });
    },
    getJournalbyID: function(id) {
      return axios({
           url: "/api/journal/" + id,
           method: "GET",
         });
   },
   postJournalData: function(journalData) {
     return axios({
       url: "/api/journal/",
       method: "POST",
       data: journalData
     })
   },
};
  

