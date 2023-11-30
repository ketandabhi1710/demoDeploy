const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
// const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

// User.sync({ alter: true });

app.get("*", function (req, res) {
  console.log("----from the * url---");
  res.json({ u: "Hello from one" });
});


app.get("/qqq", function (req, res) {
  console.log("----from qqq url---");
  res.send("Hello World");
});

app.get("/one", function (req, res) {
  console.log("----from the one url---");
  res.json({ a: "Hello from one" });
});

app.get("/two", function (req, res) {
  console.log("----from the two url---");
  res.json({ b: "Hello from two" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
