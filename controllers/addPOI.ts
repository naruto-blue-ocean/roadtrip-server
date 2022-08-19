var client = require('../db/index.js');
var express = require('express');

const addPOI =  (req : any, res : any) => {
  // console.log('In addPOI req.body = ', req.body)
  const {POIname, desID, POIID, order} = req.body;

  const queryString = `BEGIN;
    INSERT INTO pois (id, name) VALUES ('${POIID}', '${POIname}');
    INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES ((SELECT id FROM trip_destination WHERE destination_id = ${desID}), '${POIID}', ${order});
    COMMIT;`

  client.query(queryString)
    .then(() => {
      res.status(200).send('updated')
    })
    .catch((err: any) => {
      console.log('addPOI DB insert failed err = ', err);
      res.status(500).send(err)
    })
}

module.exports = addPOI;
/*
  BEGIN;
  INSERT INTO pois (id, name) VALUES ('111', 'test');
  INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES ((SELECT id FROM trip_destination WHERE destination_id = 1), '111', '1');
  COMMIT;
*/
