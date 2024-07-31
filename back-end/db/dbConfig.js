//dependencies
const pgp = require("pg-promise")();
require("dotenv").config();

//Creating a connection object
const cn = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
}

//Open the connection
const db = pgp(cn);

//Listen if connect is successful
db.connect()
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
      `Postgres connection established with user: ${user}, host: ${host}, port: ${port}, database:${database}` + "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error:", error));

  module.exports = db;