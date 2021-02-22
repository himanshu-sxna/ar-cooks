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
   getProducts: function() {
    return axios({
      url: "/api/product",
      method: "GET",
    });
   },
   uploadProducts: function(prodData) {
    return axios({
      url: "/api/product",
      method: "POST",
      data: prodData
    });
   },
   sendSessionID: function (sessionID) {
     return axios({
       url:"http://localhost:3001/api/snipcart/getsession",
       method: "POST",
       data: {"sessionID" : sessionID }
     }
     )
   }
};
  

