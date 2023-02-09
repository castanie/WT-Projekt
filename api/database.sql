------------
-- SETUP: --
------------

-- CREATE USER cinema;
-- CREATE DATABASE cinema OWNER cinema;
-- CREATE SCHEMA cinema AUTHORIZATION cinema;

DROP TABLE cinemas CASCADE;
DROP TABLE seats CASCADE;
DROP TABLE films CASCADE;
DROP TABLE shows CASCADE;
DROP TABLE users CASCADE;
DROP TABLE tickets CASCADE;
DROP TABLE ratings CASCADE;

----------------------
-- CINEMAS (TABLE): --
----------------------

CREATE TABLE cinemas (id SERIAL, dolby_vision BOOLEAN, dolby_atmos BOOLEAN, accessible BOOLEAN, PRIMARY KEY (id));
INSERT INTO cinemas VALUES (DEFAULT, TRUE, TRUE, TRUE);
INSERT INTO cinemas VALUES (DEFAULT, FALSE, FALSE, TRUE);

--------------------
-- SEATS (TABLE): --
--------------------

CREATE TABLE seats (cinema INTEGER REFERENCES cinemas(id), number SMALLINT, premium BOOLEAN, accessible BOOLEAN, PRIMARY KEY (cinema, number));
INSERT INTO seats VALUES (1, 11, FALSE, TRUE);
INSERT INTO seats VALUES (1, 12, FALSE, TRUE);
INSERT INTO seats VALUES (1, 21, TRUE, FALSE);
INSERT INTO seats VALUES (1, 22, TRUE, FALSE);
INSERT INTO seats VALUES (2, 11, FALSE, FALSE);
INSERT INTO seats VALUES (2, 12, FALSE, FALSE);
INSERT INTO seats VALUES (2, 21, TRUE, FALSE);
INSERT INTO seats VALUES (2, 22, TRUE, FALSE);

--------------------
-- FILMS (TABLE): --
--------------------

CREATE TABLE films (id SERIAL, title TEXT, description TEXT, duration INTERVAL HOUR TO MINUTE, release DATE, rating SMALLINT, PRIMARY KEY (id));
INSERT INTO films VALUES (DEFAULT, 'Babylon', '...', '03:10:00', '2023-01-19', 18);
INSERT INTO films VALUES (DEFAULT, 'The Banshees of Inisherin', '...', '01:55:00', '2023-01-05', 14);
INSERT INTO films VALUES (DEFAULT, 'The Menu', '...', '01:48:00', '2022-11-17', 16);

-------------------------
-- SHOWS (TABLE): --
-------------------------

CREATE TABLE shows (id SERIAL, cinema INTEGER REFERENCES cinemas(id), film INTEGER REFERENCES films(id), "date" DATE, "time" TIME(0), cancelled BOOLEAN, PRIMARY KEY (id));
INSERT INTO shows VALUES (DEFAULT, 1, 1, now, now + '01:00:00', FALSE);
INSERT INTO shows VALUES (DEFAULT, 2, 2, now, now + '03:00:00', FALSE);
INSERT INTO shows VALUES (DEFAULT, 1, 1, now, now + '04:00:00', FALSE);
INSERT INTO shows VALUES (DEFAULT, 2, 3, now, now + '06:00:00', TRUE);

--------------------
-- USERS (TABLE): --
--------------------

CREATE TABLE users (username VARCHAR(63), password VARCHAR(63), PRIMARY KEY (username));
INSERT INTO users VALUES ('admin', 'admin');
INSERT INTO users VALUES ('user1', 'user1');
INSERT INTO users VALUES ('user2', 'user2');

----------------------
-- TICKETS (TABLE): --
----------------------

CREATE TABLE tickets (id SERIAL, "user" VARCHAR(63) REFERENCES users(username), show INTEGER REFERENCES shows(id), redeemed BOOLEAN, PRIMARY KEY (id));
INSERT INTO tickets VALUES (DEFAULT, 'user1', 2, FALSE);
INSERT INTO tickets VALUES (DEFAULT, 'user2', 3, FALSE);

----------------------
-- RATINGS (TABLE): --
----------------------

CREATE TABLE ratings ("user" VARCHAR(63) REFERENCES users(username), film INTEGER REFERENCES films(id), stars SMALLINT, review TEXT, CHECK (stars BETWEEN 1 AND 5), PRIMARY KEY ("user",  film));
INSERT INTO ratings VALUES ('user1', 2, 5, 'Review!');
INSERT INTO ratings VALUES ('user2', 3, 4, 'Review?');