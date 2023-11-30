const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
// const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

// User.sync({ alter: true });

app.get("/", function (req, res) {
  console.log("----from demo url---");
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
