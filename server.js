const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const addUser = require("./helpers/addUser");
const app = express();
require("env2")("./config.env");

var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", addUser);

app.listen(port);
