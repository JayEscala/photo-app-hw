const express = require("express");
const app = express();

const usersController = require("./controllers/usersController.js");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const port = 3000;
app.listen(port, () => {
  console.log("Listening to port: " + port);
});
