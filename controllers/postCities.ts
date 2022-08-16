var client = require('../db/index.js');
var express = require('express');

const postCities = async (req: any, res: any) => {
  type CityInfo = {name: string, id: string};

  req.body.forEach(async (city: CityInfo) => {
    var queryString = `INSERT INTO destinations(name, id)
    VALUES ($1, $2)`;
    var values = [city.name, city.id]
    var results = await client.query(queryString, values)
    try{console.log('successfully stored data')}
    catch(err) {console.log('err in storing data', err)}
  })

}

module.exports = postCities;