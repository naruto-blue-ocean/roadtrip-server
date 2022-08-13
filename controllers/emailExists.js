// this is just a test! follow the structure!
const client = require('../database');

const emailExists = async (email) => {
  const data = await client.query('SELECT * FROM users WHERE email=$1', [ email ])

  if (data.rowCount == 0) return false;
  return data.rows[0];
};

module.exports = { emailExists };