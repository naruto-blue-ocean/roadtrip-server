\c roadtrip;

INSERT INTO users (email, password) VALUES ('johnny@email.com', 'johnnypass');
INSERT INTO users (email, password) VALUES ('testuser@email.com', 'testuserpass');
INSERT INTO users (email, password) VALUES ('testemail', 'testpassword');
INSERT INTO users (email, password) VALUES ('jason@test.com', 'password');

INSERT INTO trips (name, status) VALUES ('Planned trip 2020', 'planned');
INSERT INTO trips (name, status) VALUES ('Completed trip 2021', 'completed');
INSERT INTO trips (name, status) VALUES ('Current trip 2022', 'active');

INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJfcS6fx7LwoARZYDiqXgXL6E', 'Carson', '33.8316745', '-118.281693');
INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJSzbuqjfD3IARckzIEB2RVeg', 'Tustin', '33.7420005', '--117.8236391');
INSERT INTO destinations (id, name, lat, lng) VALUES ('ChIJpYrtFq413YARX4eG8Fd9FAQ', 'San Pedro', '33.7360619', '--118.2922461');


INSERT INTO pois (id, name) VALUES ('jIxS5Td2o0gBWx0G0qx59Q', 'San Jose Municipal Rose Garden');
INSERT INTO pois (id, name) VALUES ('testid', 'testpoiname');
INSERT INTO pois (id, name) VALUES ('Z6gkivXc4B_eG5oj4OgaxQ', 'Computer History Museum');
INSERT INTO pois (id, name) VALUES ('gR9DTbKCvezQlqvD7_FzPw', 'North India Restaurant');
INSERT INTO pois (id, name) VALUES ('iNXg9eNarEfGJ5D7oTmYZQ', 'Shoreline Lake Boathouse');

INSERT INTO user_trip (user_email, trip_id) VALUES ('jason@test.com', 1);
INSERT INTO user_trip (user_email, trip_id) VALUES ('jason@test.com', 2);
INSERT INTO user_trip (user_email, trip_id) VALUES ('jason@test.com', 3);


INSERT INTO pois (id, name) VALUES ('test poi id 1', 'test poi one');
INSERT INTO pois (id, name) VALUES ('test poi id 2', 'test poi two');
INSERT INTO pois (id, name) VALUES ('test poi id 3', 'test poi three');


INSERT INTO destinations (id, name, lat, lng) VALUES ('2', 'hi', '33.8316745', '-118.281693');
INSERT INTO destinations (id, name, lat, lng) VALUES ('3', 'hey', '33.7420005', '--117.8236391');
INSERT INTO destinations (id, name, lat, lng) VALUES ('4', 'hello', '33.7360619', '--118.2922461');




INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (1, '2', 1);
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (1, '3', 2);
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (1, '4', 3);

INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (2, 'test poi id 1', 1);
INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (2, 'test poi id 2', 2);
INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (2, 'test poi id 3', 3);

INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (2, '2', 2);
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (2, '3', 1);
INSERT INTO trip_destination (trip_id, destination_id, order_number) VALUES (2, '4', 3);

INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (4, 'jIxS5Td2o0gBWx0G0qx59Q', 1);
INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (5, 'Z6gkivXc4B_eG5oj4OgaxQ', 2);
INSERT INTO trip_destination_poi (trip_destination_id, poi_id, order_number) VALUES (6, 'gR9DTbKCvezQlqvD7_FzPw', 3);


INSERT INTO notes (content, user_email, poi_id) VALUES ('hi this is my test note', 'testemail', 'testid');
INSERT INTO notes (content, user_email, poi_id) VALUES ('many rose, much smell, very red', 'johnny@email.com', 'jIxS5Td2o0gBWx0G0qx59Q');
INSERT INTO notes (content, user_email, poi_id) VALUES ('love me some computers', 'johnny@email.com', 'Z6gkivXc4B_eG5oj4OgaxQ');