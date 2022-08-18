var express = require('express');
var client = require('../db/index.js');

const deleteDestination = (req : any, res : any) => {
  //delete the trip_destination association, don't touch the destinations table (those may still be used by other users' trips)
  console.log('deleteDestination controller invoked!');
  const querystring = `SELECT * FROM notes WHERE user_email = '${req.params.user_email}' AND poi_id = '${req.params.poi_id}';`

  client.query(querystring).then((data: any) => {
    console.log(data.rows);
    res.status(200);
    res.end(JSON.stringify(data.rows[0]));
  }).catch((err: any) => {
    console.log('error at controller getNote.ts', err);
  })
  // res.end('got note')
}

module.exports = deleteDestination;