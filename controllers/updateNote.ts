var express = require('express');
var client = require('../db/index.js');

//INSERT INTO notes (content, user_email, poi_id) VALUES ('this is a new test', 'testemail', 'testid')
//ON CONFLICT (user_email, poi_id) DO UPDATE SET content = 'this is a new test'

const updateNote = (req : any, res : any) => {
  console.log("THIS IS THE VALUE BEING PASSED", req.body)
  const queryStr = `INSERT INTO notes (content, user_email, poi_id) VALUES ('${req.body.note}' , '${req.body.user_email}' , '${req.body.poi_id}') ON CONFLICT (user_email, poi_id) DO UPDATE SET content = '${req.body.note}'; `
  // const queryStr = `UPDATE notes SET content = ${req.body.value} WHERE user_email = '${req.params.user_email}' AND poi_id = '${req.params.poi_id}`

  client.query(queryStr)
  .then(() => {
    console.log("DID WE GET IN HERE?????? hellllooooo")
    res.send('updated')
  })
  .catch((err: any) => {
    res.send(err)
  })
}

module.exports = updateNote;