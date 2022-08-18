var express = require('express');
var client = require('../db/index.js');

// client will send DELETE request to /trips/:tripId/destinations/:destinationId

const deleteDestination = (req : any, res : any) => {
  const query = `WITH delete1 AS (DELETE FROM trip_destination_poi
  WHERE trip_destination_id = (SELECT id FROM trip_destination WHERE trip_id =
  ${req.params.tripId} AND destination_id = '${req.params.destinationId}'))
  DELETE FROM trip_destination WHERE trip_id = ${req.params.tripId} AND
  destination_id = '${req.params.destinationId}'`;

  client.query(query)
    .then(() => {
      res.status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = deleteDestination;