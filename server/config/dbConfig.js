const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("DB has connected successfully");
});

db.on("error", (err) => {
  console.log("DB connection Failed", err);
});

module.exports = db;
