const connect = require("../db_connection");

q_insert = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
q_find_user = "SELECT * FROM users WHERE username = $1";
q_winning_games =
  "SELECT TO_CHAR(game_date, 'DD-MON-YYYY') AS game_date, home_team, away_team FROM sport WHERE winner = $1 ORDER BY game_date DESC";

q_find_tasks = "SELECT * FROM TASKS WHERE user_id = $1";
q_add_task =
  "INSERT INTO tasks (task_id, user_id, task, completed) VALUES ($1, $2, $3, $4);";

const addUserDB = async data => {
  return connect.query(q_insert, [data.username, data.email, data.password]);
};

const todoDB = async task => {
  return new Promise((resolve, reject) => {
    return connect.query(q_add_task, [
      task.task_id,
      task.user_id,
      task.task,
      task.completed
    ]);
  }).catch(err => {
    console.log("err in db", err);
    return Promise.reject(err);
  });
};

const findUserDB = async data => {
  let details = {};
  return new Promise((resolve, reject) => {
    return connect
      .query(q_find_user, [data.username])
      .then(result => {
        result.rowCount === 0 ? reject("no such user") : null;
        let user_id = result.rows[0].user_id,
          password = result.rows[0].password;
        if (password !== data.password) {
          reject("wrong password");
        }
        details.user_id = user_id;
        return connect.query(q_find_tasks, [user_id]);
      })
      .then(result => {
        details.tasks = result.rowCount === 0 ? [] : result.rows;
        resolve(details);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  });
};

const teamWinsDB = async team => {
  return connect.query(q_winning_games, [team.team]).then(result => {
    return new Promise((resolve, reject) => {
      if (result.rowCount > 0) {
        resolve(result);
      }
      return reject("failure");
    });
  });
};

module.exports = { addUserDB, findUserDB, teamWinsDB, todoDB };
