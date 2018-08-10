const connect = require("../db_connection");

q_insert = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";

const addUserDB = async data => {
  return connect.query(q_insert, [data.username, data.email, data.password]);
};

module.exports = addUserDB;
