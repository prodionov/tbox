const express = require("express");
const {
  addUserDB,
  findUserDB,
  teamWinsDB,
  todoDB
} = require("../db/query/addUser");

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

const todo = async (req, res, next) => {
  let task = req.body;
  try {
    let results = await todoDB(task);
    res.send(JSON.stringify({ result: results }));
  } catch (err) {
    console.log("error", error);
  }
  next();
};

const loginUser = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await findUserDB(data);
    console.log("find user result", result);
    res.send(
      JSON.stringify({
        result: "success",
        todo: result.tasks,
        user_id: result.user_id
      })
    );
  } catch (err) {
    console.log("helpers err", err);
    res.send(JSON.stringify({ result: "failure" }));
  }
  next();
};

const teamWins = async (req, res, next) => {
  let team = req.body;
  try {
    let results = await teamWinsDB(team);
    res.send(JSON.stringify({ result: results }));
  } catch (err) {
    res.send(JSON.stringify({ result: "failure" }));
  }
};

module.exports = { addUser, loginUser, teamWins, todo };
