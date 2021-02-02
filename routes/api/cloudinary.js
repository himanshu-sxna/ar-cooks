const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");

// Matches with "/api/image/upload"
router
    .post("/upload/", async (req, res) => {
        try {
            const imgString = req.body;
            console.log(req);
            const uploadResponse = await cloudinary.uploader.upload(imgString, {
                upload_preset: 'ml_default',
            });
            console.log(uploadResponse);
            res.status(200).json({msg: "success"})
        } catch (err) {
            console.error(err)
            res.status(500).json({err: "Something went wrong"})
        }
       
    });

module.exports = router;   