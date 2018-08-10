const connect = require("./db_connection");
const path = require("path");
const fs = require("fs");

const sql = fs.readFileSync(path.join(__dirname, "db_build.sql")).toString();

connect.query(sql, (err, res) => {
  if (err) throw err;
  console.log("database is built", res);
});
