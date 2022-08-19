var express = require('express');
var client = require('../db/index.js');

const getActiveTripId = (req : any, res : any) => {

  const query = `SELECT t.id FROM trips t LEFT OUTER JOIN
  user_trip ut ON ut.trip_id = t.id WHERE t.status = 'active'
  AND ut.user_email = '${req.params.userEmail}'`;

  client.query(query)
    .then((result: any) => {
      res.status(200).send(result.rows[0]);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
}

module.exports = getActiveTripId;