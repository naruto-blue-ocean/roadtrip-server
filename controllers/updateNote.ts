var express = require('express');
var client = require('../db/index.js');


const updateNote = (req : any, res : any) => {
  console.log("THIS IS THE VALUE BEING PASSED", req.body)
  const queryStr = `UPDATE notes SET content = ${req.body.value} WHERE user_email = '${req.params.user_email}' AND poi_id = '${req.params.poi_id}`

  client.query(queryStr)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err: any) => {
    res.send(err)
  })
}

module.exports = updateNote;