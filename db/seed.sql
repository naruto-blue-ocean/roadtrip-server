\c roadtrip;

INSERT INTO users (email, password) VALUES ('johnny@email.com', 'johnnypass');
INSERT INTO users (email, password) VALUES ('testuser@email.com', 'testuserpass');
INSERT INTO users (email, password) VALUES ('testemail', 'testpassword');
INSERT INTO users (email, password) VALUES ('noa@email.com', 'noapass')

WITH id as (INSERT INTO trips (name, status) VALUES ('THE TRIPPIEST TRIP', 'planned') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', id);
WITH id as (INSERT INTO trips (name, status) VALUES ('The 4th Great Ninja War', 'planned') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', id);

INSERT INTO pois (id, name) VALUES ('jIxS5Td2o0gBWx0G0qx59Q', 'San Jose Municipal Rose Garden');
INSERT INTO pois (id, name) VALUES ('testid', 'testpoiname');
INSERT INTO pois (id, name) VALUES ('Z6gkivXc4B_eG5oj4OgaxQ', 'Computer History Museum');
INSERT INTO pois (id, name) VALUES ('gR9DTbKCvezQlqvD7_FzPw', 'North India Restaurant');
INSERT INTO pois (id, name) VALUES ('iNXg9eNarEfGJ5D7oTmYZQ', 'Shoreline Lake Boathouse');

INSERT INTO notes (content, user_email, poi_id) VALUES ('hi this is my test note', 'testemail', 'testid');
INSERT INTO notes (content, user_email, poi_id) VALUES ('many rose, much smell, very red', 'johnny@email.com', 'jIxS5Td2o0gBWx0G0qx59Q');
INSERT INTO notes (content, user_email, poi_id) VALUES ('love me some computers', 'johnny@email.com', 'Z6gkivXc4B_eG5oj4OgaxQ');

