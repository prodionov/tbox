const connect = require("../db_connection");

q_insert = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
q_find_user = "SELECT * FROM users WHERE username = $1";

const addUserDB = async data => {
  return connect.query(q_insert, [data.username, data.email, data.password]);
};

const findUserDB = async data => {
  return connect.query(q_find_user, [data.username]).then(result => {
    console.log("result", result);
    return new Promise((resolve, reject) => {
      if (result.rowCount > 0) {
        let password = result.rows[0].password;
        if (data.password === password) {
          resolve("success");
        } else {
          return reject("Wrong username password pair");
        }
      } else {
        return reject("No such user");
      }
    });
  });
};

module.exports = { addUserDB, findUserDB };
