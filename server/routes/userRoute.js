const router = require("express").Router();
const User = require("../models/userModel");
const crypto = require("crypto");
// const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const userAccessKey = process.env.USER_ACCESS_KEY;
const userSecretKey = process.env.USER_SECRET_KEY;

const randomImageName = crypto.randomBytes(32).toString("hex");

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
    if (user) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.buffer);
    console.log(bucketName);

    // const imageBuffer = await sharp(req.file.buffer)
    //   .resize({ height: 1920, width: 1080, fit: "contain" })
    //   .toBuffer();

    const params = {
      Bucket: bucketName,
      Key: randomImageName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    const s3Response = await s3Client.send(command);
    console.log(s3Response);
    const data = {
      ...req.body,
      profilePic: randomImageName,
    };
    const newUser = new User(data);
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
