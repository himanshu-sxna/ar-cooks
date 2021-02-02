const router = require("express").Router();
const journalRoutes = require("./journal");
const productRoutes = require("./product");
const imageRoutes = require("./cloudinary");

// Post routes
router.use("/journal", journalRoutes);
router.use("/product", productRoutes);
router.use("/image", imageRoutes );

module.exports = router;
