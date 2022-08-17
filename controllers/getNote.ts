var express = require('express');
var client = require('../db/index.js');

const getNote = (req : any, res : any) => {
  console.log('hi we have reached get note controller');
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

module.exports = getNote;