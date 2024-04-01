const router = require("express").Router();
const User = require("../models/userModel");
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const userAccessKey = process.env.USER_ACCESS_KEY;
const userSecretKey = process.env.USER_SECRET_KEY;

const s3Client = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: userAccessKey,
    secretAccessKey: userSecretKey,
  },
});

//post
router.post("/register", upload.single("profilePic"), async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(req.body);
    if (user) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User does not contain details",
      });
    } else {
      return res.send({
        success: true,
        message: "User logged in successfully",
        data: user,
      });
    }
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
