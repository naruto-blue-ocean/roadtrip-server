var express = require('express');
var client = require('../db/index.js');

const getTripID = (req, res) => {
  console.log('inside trip id', req.data.email)
  client.query(`SELECT trip_id from user_trip WHERE email = $1`, [req.data.email])
    .then( (response) => {
      console.log('query hitting')
      console.log(response.rows)
    })
}

module.exports = getTripID