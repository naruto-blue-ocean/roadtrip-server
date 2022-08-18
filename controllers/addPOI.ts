var client = require('../db/index.js');
var express = require('express');

const addPOI =  (req : any, res : any) => {
  console.log('In addPOI req.body = ', req.body)
  const {POIname, desID, POIID, order} = req.body;

  const queryString = `BEGIN;
    INSERT INTO pois (id, name) VALUES ('${POIID}', '${POIname}');
    INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES ('${desID}', '${POIID}', '${order}');
    COMMIT;`

  client.query(queryString)
    .then(() => {
      console.log('')
      res.status(200).send('updated')
    })
    .catch((err: any) => {
      res.status(500).send(err)
    })
}

module.exports = addPOI;