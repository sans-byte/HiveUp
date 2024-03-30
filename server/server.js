const express = require("express");
require("dotenv").config();
const config = require("./config/dbConfig");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
