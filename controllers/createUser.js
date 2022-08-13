const client = require('../database');
const bcrypt = require('bcrypt')

const createUser = async (email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const data = await client.query(
    "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id, email, password",
    [email, hash]
  );

  if (data.rowCount == 0) return false;
  return data.rows[0];
};

module.exports = { createUser };