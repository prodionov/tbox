const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

if (!process.env.DB_URL) {
  throw Error("the DB_URL is not set");
}

params = url.parse(process.env.DB_URL);
//console.log('params', params);
[username, password] = params.auth.split(":");

options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

//console.log(options);
module.exports = new Pool(options);
