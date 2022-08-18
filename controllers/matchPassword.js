const client = require('../database')
const bcrypt = require('bcryptjs')

const matchPassword = async (password, hashPassword) => {
  const match = await bcrypt.compare(password, hashPassword);
  return match;
}

module.exports = { matchPassword };