const express = require("express");
const { addUserDB, findUserDB, teamWinsDB } = require("../db/query/addUser");

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
  console.log("data", data);
  try {
    await findUserDB(data);
    res.send(JSON.stringify({ result: "success" }));
    console.log("we sent success");
  } catch (err) {
    console.log("err", err);
    res.send(JSON.stringify({ result: "failure" }));
  }
  next();
};

const teamWins = async (req, res, next) => {
  let team = req.body;
  console.log("team", team);
  try {
    let results = await teamWinsDB(team);
    console.log(results);
    res.send(JSON.stringify({ result: results }));
  } catch (err) {
    res.send(JSON.stringify({ result: "failure" }));
  }
};

module.exports = { addUser, loginUser, teamWins };
