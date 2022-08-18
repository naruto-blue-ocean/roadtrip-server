var express = require('express');
var client = require('../db/index.js');

const getUserTrips = (req: any, res: any) => {
  const queryString = `SELECT trips.id, trips.name, trips.status from trips, user_trip
  WHERE user_trip.user_email = '${req.params.user_email}'
  AND user_trip.trip_id = trips.id
  AND trips.status = 'planned' OR trips.status = 'active';`

  client.query(queryString)
  .then((data: any) => {
    res.send(data.rows);
  })
  .catch((error: Error) => {
    console.error(error);
  })
}

module.exports = getUserTrips;