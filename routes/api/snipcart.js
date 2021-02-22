const router = require("express").Router();
const axios = require('axios');
const Buffer = require("buffer/").Buffer;

let SnipcartAPI = Buffer.from(process.env.SNIPCART_API_KEY).toString("base64");

router
  .post("/getsession", (req, res) => {
  let sessionID = req.body.sessionID ;
    axios({
      method: "GET",
      url: `https://app.snipcart.com/api/sessions/${sessionID}`,
      headers: { 
        'Authorization': `Basic ${SnipcartAPI}`, 
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).send("session ID Logged")
    })
    .catch(function (error) {
      console.log(error);
    });
  })

function getCartDetails() {
  
}

module.exports = router;