const express = require("express");
const { addUserDB, findUserDB } = require("../db/query/addUser");

const addUser = async (req, res, next) => {
  let data = req.body;
  try {
    await addUserDB(data);
    res.send(JSON.stringify({ result: "success" }));
  } catch (err) {
    console.log("error", err);
  }
  next();
};

const loginUser = async (req, res, next) => {
  let data = req.body;
  try {
    await findUserDB(data);
    res.send(JSON.stringify({ result: "success" }));
  } catch (err) {
    res.send(JSON.stringify({ result: "failure" }));
  }
  next();
};

module.exports = { addUser, loginUser };
