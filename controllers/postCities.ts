var client = require('../db/index.js');
var express = require('express');

const postCities = async (req: any, res: any) => {
  type CityInfo = {name: string, id: string, lat: number, lng: number, trip_id: number};
  // console.log('backend what is req.body', req.body)
  // console.log('what is req.body.trip_id', req.body[0].trip_id)
  // var values = [city.name, city.id, city.lat, city.lng, city.trip_id]

  req.body.forEach(async (city: CityInfo) => {
    var values = [city.name, city.id, city.lat, city.lng, city.trip_id]
    var queryString = `WITH (INSERT INTO destinations(name, id, lat, lng)
    VALUES ($1, $2, $3, $4)),
    (INSERT INTO trip_destination(destination_id, trip_id)
    VALUES($2, $5))`;

    var results = await client.query(queryString, values)
    try{console.log('Success posting query from back')}
    catch(err) {console.log('Error in storing data', err)}
  });
  // req.body.forEach(async (city: CityInfo) => {
  //   var queryString = `INSERT INTO destinations(name, id, lat, lng)
  //   VALUES ($1, $2, $3, $4)`;
  //   var values = [city.name, city.id, city.lat, city.lng]
  //   var results = await client.query(queryString, values)
  //   try{console.log('first success post query')}
  //   catch(err) {console.log('err in storing data', err)}
  // });

  // available: email/ (trip id- passed down as
  // desitinations id is the same as API call
  // check if destination id (from destinations table) doesnt exist, if it does then insert the id and get it back

// 1 with and 1 insert
  // req.body.forEach(async (city: CityInfo) => {
  //   // use destinations id
  //   var queryString2 = `INSERT INTO trip_destination(trip_id, destination_id)
  //   VALUES($5, $6)`

  //   var values2 = [city.trip_id, city.id]

  //   // var values2 = [city.trip_id, city.name];
  //   // var destination_id = (`SELECT id FROM destinations WHERE`)
  //   var results = await client.query(queryString2, values2)
  //   try{console.log('successfully stored trip-desti data')}
  //   catch(err) {console.log('err in storing data', err)}
  // });

}

module.exports = postCities;