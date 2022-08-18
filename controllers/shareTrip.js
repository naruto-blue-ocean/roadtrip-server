var express = require('express');
var client = require('../db/index.js');

const shareTrip = (req, res) => {
  // console.log('inside trip id', req.body.email)
  client.query(`INSERT INTO user_trip (user_email, trip_id) VALUES ($1, $2)`, [req.params.email_address, req.params.trip_id])
    .then( (response) => {
      // console.log('query hitting')
      console.log(response.rows)
      res.send(response.rows)
    })

  // console.log(req.params.email_address)
  // console.log(req.params.trip_id)
  // res.send(req.params.email_address)
}

module.exports = shareTrip;