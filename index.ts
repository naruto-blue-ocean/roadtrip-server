export {};
require('dotenv').config()
// import controllers from './controllers';
const controllers = require('./controllers')

const express = require('express');
import { Request, Response } from 'express';
const passport = require('passport');
require('./db/passportConfig.ts')(passport);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.post(
  "/auth/signup",
  passport.authenticate("local-signup", { session: false }),
  (req: any, res: any) => {
    res.json({ user: req.user });
  }
);
app.post(
  "/auth/login",
  passport.authenticate("local-login", { session: false }),
  (req: any, res: any) => {
    res.json({ user: req.user });
  }
);

app.get(
  '/notes/:user_email/:poi_id', controllers.getNote
)


app.put('/updateNote', controllers.updateNote)


app.post(
  '/postCities', controllers.postCities
)

app.get('/trips/:trip_id', controllers.getTrip);
app.delete('/trips/destinations/:destination_id', controllers.deleteDestination)
app.delete('/trips/destinations/pois/:poi_id', controllers.deletePOI)

//to update the order of destinations in a specific trip
app.put('/trips/:trip_id/destinations', controllers.updateDestinationOrder)

//to update the order of POIs in a specific trip
app.put('/trips/destinations/pois', controllers.updatePOIOrder)



app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))