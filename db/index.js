const { Client } = require("pg");
const { user, host, database, password, port } = require("./dbConfig");

const client = new Client({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT
});

client.connect();

module.exports = client;