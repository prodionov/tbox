const connect = require("../db_connection");

q_insert = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
q_find_user = "SELECT * FROM users WHERE username = $1";
q_winning_games =
  "SELECT TO_CHAR(game_date, 'DD-MON-YYYY') AS game_date, home_team, away_team FROM sport WHERE winner = $1 ORDER BY game_date DESC";

const addUserDB = async data => {
  return connect.query(q_insert, [data.username, data.email, data.password]);
};

const findUserDB = async data => {
  console.log("data.username", data.username);
  return connect.query(q_find_user, [data.username]).then(result => {
    return new Promise((resolve, reject) => {
      console.log(result.rows);
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

const teamWinsDB = async team => {
  console.log("team", team);
  return connect.query(q_winning_games, [team.team]).then(result => {
    return new Promise((resolve, reject) => {
      if (result.rowCount > 0) {
        resolve(result);
      }
      return reject("failure");
    });
  });
};

module.exports = { addUserDB, findUserDB, teamWinsDB };
