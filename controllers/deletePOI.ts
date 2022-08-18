var express = require('express');
var client = require('../db/index.js');

// client will send DELETE request to /trips/:tripId/destinations/:destinationId/pois/:poiId

const deletePOI = (req : any, res : any) => {
  const query = `DELETE FROM trip_destination_poi WHERE poi_id = '${req.params.poiId}'
  AND trip_destination_id = (SELECT id FROM trip_destination WHERE trip_id =
  ${req.params.tripId} AND destination_id = '${req.params.destinationId}')`;

  client.query(query)
    .then(() => {
      res.status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = deletePOI;