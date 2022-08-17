var client = require('../db/index.js');
var express = require('express');

const postCities = async (req: any, res: any) => {
  type CityInfo = {name: string, id: string, lat: number, lng: number};

  req.body.forEach(async (city: CityInfo) => {
    var queryString = `INSERT INTO destinations(name, id, lat, lng)
    VALUES ($1, $2, $3, $4)`;
    var values = [city.name, city.id, city.lat, city.lng]
    var results = await client.query(queryString, values)
    try{console.log('successfully stored data')}
    catch(err) {console.log('err in storing data', err)}
  })

}

module.exports = postCities;