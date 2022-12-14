export {};
// declare function require(name:string);
const client = require('./index.js');
const bcrypt = require('bcryptjs');

const emailExists = async (email: String) => {
  const data = await client.query('SELECT * FROM users WHERE email=$1', [ email ])

  if (data.rowCount == 0) return false;
  return data.rows[0];
};


const createUser = async (email: String, password: String) => {
  const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password, salt);
  const hash = password;

  const data = await client.query(
    "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING email, password",
    [email, hash]
  );

  if (data.rowCount == 0) return false;
  return data.rows[0];
};

const matchPassword = async (password: String, hashPassword: String) => {
  // const match = await bcrypt.compare(password, hashPassword);
  const match = password === hashPassword
  return match
};

module.exports = { emailExists, createUser, matchPassword };