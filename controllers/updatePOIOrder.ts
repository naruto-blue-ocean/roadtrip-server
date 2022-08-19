var express = require('express');
var client = require('../db/index.js');

/* client will send PUT request to /trips/:trip_id/destinations/:destination_id/pois
body of req will be an object
{
  poi_id # 1: new order 1,
  poi_id # 2: new order 2,
}
*/

const updatePOIOrder = (req : any, res : any) => {
  console.log(req.body);
  const queryInsertStr = Object.entries(req.body).map(([poiId, orderNumber]) =>  (`('${poiId}', ${orderNumber})`)).join(', ');
  const query = `UPDATE trip_destination_poi AS tdp SET order_number = temp.order_number
  FROM (VALUES ${queryInsertStr}) AS temp(poi_id, order_number)
  WHERE tdp.poi_id = temp.poi_id AND tdp.trip_destination_id =
  (SELECT id FROM trip_destination WHERE trip_id = ${req.params.tripId}
  AND destination_id = '${req.params.destinationId}')`;

  return client.query(query)
    .then(() => {
      res.status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });
}

module.exports = updatePOIOrder;