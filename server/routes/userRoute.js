const router = require("express").router();
const User = require("../models/userModel");
//post
router.post("/register", (req, res) => {
  try {
    const user = User.findOne({ email: req.body.email });
    if (user) {
      return {
        success: false,
        message: "User already exists",
      };
    }
    
  } catch (error) {}
});
