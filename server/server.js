const express = require("express");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
require("dotenv").config();
const config = require("./config/dbConfig");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
