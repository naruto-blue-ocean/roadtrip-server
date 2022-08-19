var express = require('express');
var client = require('../db/index.js');

const recoverTrip = (req, res) => {
  console.log(req.params);
  const queryString = `
    UPDATE trips
    SET status = 'planned'
    WHERE id = ${req.params.trip_id};
  `

  client.query(queryString)
  .then(() => {
    res.send('recovered');
  })
  .catch((error) => {
    console.error(error);
  })
}

module.exports = recoverTrip;