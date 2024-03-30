const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

model.exports = mongoose.model("users", userSchema);
