var express = require('express');
var client = require('../db/index.js');

const getTrip = (req : any, res : any) => {
  console.log('getTrip controller invoked! here is req.params', req.query);
  const trip_id: string = req.params.trip_id;
  console.log('here is the trip_id', trip_id);

  const query = `SELECT * FROM trip_destination, trip_destination_poi WHERE trip_id = ${trip_id} AND trip_destination.id = `
}

`SELECT td.destination_id, tdp.poi_id, d.name, p.name, d.lat, d.lng FROM trip_destination td
INNER JOIN trip_destination_poi tdp ON td.id=tdp.trip_destination_id INNER JOIN destinations d ON d.id = td.destination_id INNER JOIN pois p ON p.id=tdp.poi_id`

module.exports = getTrip;


/*

const sampleTrip = {
  id: 100,
  destinations: [
    {
      id: 200,
      cityName: 'San Francisco',
      POIs: [
        {
          id: 1,
          name: 'Golden Gate Bridge',
          details: 'An iconic red bridge'
        },
        {
          id: 2,
          name: 'Dolores Park',
          details: 'A city park'
        },
        {
          id: 3,
          name: 'Dumpling Home',
          details: 'A Chinese restaurant specializing in dumplings'
        }
      ]
    },
    {
      id: 300,
      cityName: 'San Diego',
      POIs: [
        {
          id: 4,
          name: 'Legoland',
          details: 'An amusement park featuring Legos'
        },
        {
          id: 5,
          name: 'Tacos El Gordo',
          details: 'A famous Mexican restaurant'
        },
        {
          id: 6,
          name: 'UC San Diego',
          details: 'A public university'
        }
      ]
    },
    {
      id: 400,
      cityName: 'Los Angeles',
      POIs: [
        {
          id: 7,
          name: 'Griffith Observatory',
          details: 'An observatory with telecopes and exhibits'
        },
        {
          id: 8,
          name: 'Disneyland',
          details: 'The happiest place on Earth'
        },
        {
          id: 9,
          name: 'Hollywood',
          details: 'A hub for entertainment and media'
        }
      ]
    }
  ]
}*/