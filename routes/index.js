const path = require("path");
const router = require("express").Router();

router.get("/api", (req, res) => {
    res.json({ success: "API Success" });
})

module.exports = router;
