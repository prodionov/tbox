const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { addUser, loginUser, teamWins, todo } = require("./helpers/addUser");
const app = express();
const dataReq = require("./helpers/dataReq");
require("env2")("./config.env");

var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/piechart", dataReq);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/register", addUser);
app.post("/login", loginUser);
app.post("/winners", teamWins);
app.post("/todo", todo);

app.listen(port);
