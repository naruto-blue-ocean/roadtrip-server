\c roadtrip;
-- users
INSERT INTO users (email, password) VALUES ('johnny@email.com', 'johnnypass');
INSERT INTO users (email, password) VALUES ('testuser@email.com', 'testuserpass');
INSERT INTO users (email, password) VALUES ('testemail', 'testpassword');
INSERT INTO users (email, password) VALUES ('jason@test.com', 'password');
INSERT INTO users (email, password) VALUES ('noa@email.com', '2a$10$kGkH/P6HOCXzc8TOzHgZC.AtiGI8/K2vCRvdWGY147oLThmn4zGni');
INSERT INTO users (email, password) VALUES ('test@test.com', 'test');

INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJfcS6fx7LwoARZYDiqXgXL6E', 'Carson', '33.8316745', '-118.281693');
INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJSzbuqjfD3IARckzIEB2RVeg', 'Tustin', '33.7420005', '--117.8236391');
INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJpYrtFq413YARX4eG8Fd9FAQ', 'San Pedro', '33.7360619', '--118.2922461');

--trips and user_trip
WITH id as (INSERT INTO trips (name, status) VALUES ('THE TRIPPIEST TRIP', 'planned') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', (SELECT * FROM id));
WITH id as (INSERT INTO trips (name, status) VALUES ('The 4th Great Ninja War', 'planned') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', (SELECT * FROM id));
WITH id as (INSERT INTO trips (name, status) VALUES ('The journey to a job in Software Engineering', 'active') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', (SELECT * FROM id));
WITH id as (INSERT INTO trips (name, status) VALUES ('Going to Mexico', 'trash') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', (SELECT * FROM id));
WITH id as (INSERT INTO trips (name, status) VALUES ('SDC', 'completed') RETURNING id)
INSERT INTO user_trip (user_email, trip_id) VALUES ('noa@email.com', (SELECT * FROM id));

--pois
INSERT INTO pois (id, name) VALUES ('jIxS5Td2o0gBWx0G0qx59Q', 'San Jose Municipal Rose Garden');
INSERT INTO pois (id, name) VALUES ('testid', 'testpoiname');
INSERT INTO pois (id, name) VALUES ('Z6gkivXc4B_eG5oj4OgaxQ', 'Computer History Museum');
INSERT INTO pois (id, name) VALUES ('gR9DTbKCvezQlqvD7_FzPw', 'North India Restaurant');
INSERT INTO pois (id, name) VALUES ('iNXg9eNarEfGJ5D7oTmYZQ', 'Shoreline Lake Boathouse');

/*making 1 trip */
-- carson
WITH tdid as (INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES ('1', 'ChIJfcS6fx7LwoARZYDiqXgXL6E', 1) RETURNING id)
INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES ((SELECT * FROM tdid), 'gR9DTbKCvezQlqvD7_FzPw', 1), ((SELECT * FROM tdid), 'Z6gkivXc4B_eG5oj4OgaxQ', 2), ((SELECT * FROM tdid), 'iNXg9eNarEfGJ5D7oTmYZQ', 3);
--tustin
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES ('1', 'ChIJSzbuqjfD3IARckzIEB2RVeg', 2);
--san pedro
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES ('1', 'ChIJpYrtFq413YARX4eG8Fd9FAQ', 3);
/*adding pois to destinations*/


--notes
INSERT INTO notes (content, user_email, poi_id) VALUES ('hi this is my test note', 'testemail', 'testid');
INSERT INTO notes (content, user_email, poi_id) VALUES ('many rose, much smell, very red', 'johnny@email.com', 'jIxS5Td2o0gBWx0G0qx59Q');
INSERT INTO notes (content, user_email, poi_id) VALUES ('love me some computers', 'johnny@email.com', 'Z6gkivXc4B_eG5oj4OgaxQ');

