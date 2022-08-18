var client = require('../db/index.js');
var express = require('express');

const addPOI =  (req : any, res : any) => {
  console.log('In addPOI req.body = ', req.body)

  const queryString = `INSERT INTO pois (id, name) VALUES ('${req.body.id}', '${req.body.name}');`

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