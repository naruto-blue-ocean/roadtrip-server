var express = require('express');
var client = require('../db/index.js');

const postNewTrip = (req: any, res: any) => {

  var {tripName, email} = req.body;
  console.log(email, tripName);
  const queryString = `
  WITH id as (INSERT INTO trips (name, status) VALUES ('${tripName}', 'planned') RETURNING id)
  INSERT INTO user_trip (user_email, trip_id) VALUES ('${email}', (SELECT * FROM id)) RETURNING trip_id;
  `

  client.query(queryString)
  .then((data: any) => {
    res.send(data.rows[0])
  })
  .catch((err: Error) => {
    console.error(err);
  })
}

module.exports = postNewTrip;