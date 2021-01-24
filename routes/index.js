const path = require("path");
const router = require("express").Router();

router.post("/api", (req, res) => {
    res.json({ success: "API Success" });
})

module.exports = router;
