require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
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
