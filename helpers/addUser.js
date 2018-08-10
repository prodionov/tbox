const express = require("express");
const addUserDB = require("../db/query/addUser");

const addUser = async (req, res, next) => {
  let data = req.body;
  console.log(data);
  try {
    await addUserDB(data);
    res.send(JSON.stringify({ result: "success" }));
  } catch (err) {
    console.log("error", error);
  }
  next();
};

module.exports = addUser;
