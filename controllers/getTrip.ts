var express = require('express');
var client = require('../db/index.js');

const getTrip = (req : any, res : any) => {
  console.log('getTrip controller invoked! here is req.params', req.query);
  const trip_id: string = req.params.trip_id;
  console.log('here is the trip_id', trip_id);
  res.end();
  const query = `SELECT * FROM trip_destination, trip_destination_poi WHERE trip_id = ${trip_id} AND trip_destination.id = `
}

`SELECT td.destination_id, tdp.poi_id, d.name, p.name, d.lat, d.lng FROM trip_destination td
INNER JOIN trip_destination_poi tdp ON td.id=tdp.trip_destination_id INNER JOIN destinations d ON d.id = td.destination_id INNER JOIN pois p ON p.id=tdp.poi_id`

module.exports = getTrip;


/*

const sampleTrip = {
  id: 100,
  name: 'Fun Girls Trip',
  destinations: [
    {
      id: 200,
      cityName: 'San Francisco',
      lat: 'abc',
      lang: 'xyz',
      POIs: [
        {
          id: 1,
          name: 'Golden Gate Bridge',
          order_number: 1
        },
        {
          id: 2,
          name: 'Dolores Park',
          order_number: 2
        },
        {
          id: 3,
          name: 'Dumpling Home',
          order_number: 3
        }
      ]
    },
    {
      id: 300,
      cityName: 'San Diego',
      lat: 'abc',
      lang: 'xyz',
      POIs: [
        {
          id: 4,
          name: 'Legoland',
          order_number: 1
        },
        {
          id: 5,
          name: 'Tacos El Gordo',
          order_number: 2
        },
        {
          id: 6,
          name: 'UC San Diego',
          order_number: 3
        }
      ]
    },
    {
      id: 400,
      cityName: 'Los Angeles',
      lat: 'abc',
      lang: 'xyz',
      POIs: [
        {
          id: 7,
          name: 'Griffith Observatory',
          order_number: 1
        },
        {
          id: 8,
          name: 'Disneyland',
          order_number: 2
        },
        {
          id: 9,
          name: 'Hollywood',
          order_number: 3
        }
      ]
    }
  ]
}*/

WITH agg AS (SELECT json_build_object('id', id, 'order_number', order_number, 'name', name) FROM (SELECT tdp.poi_id AS id, tdp.order_number AS order_number, pois.name AS name FROM trip_destination_poi AS tdp INNER JOIN pois ON tdp.poi_id = pois.id WHERE tdp.trip_destination_id = 3 ORDER BY order_number) AS poi_item) SELECT json_agg(json_build_object) FROM agg;