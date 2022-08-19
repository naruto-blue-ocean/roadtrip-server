DROP DATABASE IF EXISTS roadtrip;
CREATE DATABASE roadtrip;

\c roadtrip;

-- create non-relational tables
CREATE TYPE trip_status AS ENUM ('completed', 'active', 'planned', 'trash');

CREATE TABLE IF NOT EXISTS users (
  -- id SERIAL PRIMARY KEY, -- id of user depends on authentication step
  -- name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS trips (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status trip_status NOT NULL
);

CREATE TABLE IF NOT EXISTS destinations (
  id VARCHAR(255) PRIMARY KEY UNIQUE, -- id here is pulled from Place AutoComplete API
  -- id should match search from API call
  name VARCHAR(255) NOT NULL,
  lat VARCHAR(255) NOT NULL,
  lng VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS pois (
  id VARCHAR(255) PRIMARY KEY UNIQUE, -- id here is pulled from Yelp API
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_email VARCHAR(255) NOT NULL REFERENCES users(email),
  poi_id VARCHAR(255) NOT NULL REFERENCES pois(id),
  UNIQUE (user_email, poi_id)
);

-- create relational tables
CREATE TABLE IF NOT EXISTS user_trip (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL REFERENCES users(email),
  trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  UNIQUE (user_email, trip_id)
);

CREATE TABLE IF NOT EXISTS trip_destination (
  id SERIAL PRIMARY KEY,
  trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  destination_id VARCHAR(255) NOT NULL REFERENCES destinations(id),
  order_number INTEGER NOT NULL
  -- UNIQUE (trip_id, destination_id)
);

CREATE TABLE IF NOT EXISTS trip_destination_poi (
  id SERIAL PRIMARY KEY,
  trip_destination_id INTEGER NOT NULL REFERENCES trip_destination(id) ON DELETE CASCADE,
  poi_id VARCHAR(255) NOT NULL REFERENCES pois(id),
  order_number INTEGER NOT NULL
  -- UNIQUE (trip_destination_id, poi_id)
);

CREATE TABLE IF NOT EXISTS user_poi_note (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL REFERENCES users(email),
  poi_id VARCHAR(255) NOT NULL REFERENCES pois(id),
  note_id INTEGER NOT NULL REFERENCES notes(id),
  UNIQUE (user_email, poi_id)
);

