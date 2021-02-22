const router = require("express").Router();
const journalRoutes = require("./journal");
const productRoutes = require("./product");
const imageRoutes = require("./cloudinary");
const snipcartRoutes = require("./snipcart");

// Post routes
router.use("/journal", journalRoutes);
router.use("/product", productRoutes);
router.use("/image", imageRoutes );
router.use("/snipcart", snipcartRoutes);

module.exports = router;
