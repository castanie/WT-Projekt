------------
-- SETUP: --
------------

-- CREATE USER cinema;
-- CREATE DATABASE cinema OWNER cinema;
-- CREATE SCHEMA cinema AUTHORIZATION cinema;

DROP TABLE screens CASCADE;
DROP TABLE seats CASCADE;
DROP TABLE films CASCADE;
DROP TABLE shows CASCADE;
DROP TABLE users CASCADE;
DROP TABLE tickets CASCADE;
DROP TABLE reviews CASCADE;

SET TIME ZONE 'Europe/Vienna';

----------------------
-- SCREENS (TABLE): --
----------------------

CREATE TABLE screens (id SERIAL, dolby_vision BOOLEAN, dolby_atmos BOOLEAN, accessible BOOLEAN, PRIMARY KEY (id));
INSERT INTO screens VALUES (DEFAULT, TRUE, TRUE, TRUE);
INSERT INTO screens VALUES (DEFAULT, FALSE, FALSE, TRUE);

--------------------
-- SEATS (TABLE): --
--------------------

CREATE TABLE seats (screen INTEGER REFERENCES screens(id), id TEXT, premium BOOLEAN, accessible BOOLEAN, PRIMARY KEY (screen, id));
INSERT INTO seats VALUES (1, 'A1', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A2', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A3', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A4', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A5', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A6', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A7', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A8', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'A9', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B1', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B2', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B3', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B4', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B5', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B6', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B7', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B8', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'B9', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C1', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C2', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C3', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C4', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C5', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C6', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C7', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C8', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'C9', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D1', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D2', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D3', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D4', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D5', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D6', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D7', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D8', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'D9', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E1', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E2', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E3', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E4', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E5', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E6', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E7', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E8', FALSE, FALSE);
INSERT INTO seats VALUES (1, 'E9', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A1', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A2', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A3', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A4', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A5', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A6', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'A7', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B1', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B2', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B3', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B4', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B5', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B6', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'B7', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C1', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C2', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C3', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C4', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C5', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C6', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'C7', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D1', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D2', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D3', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D4', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D5', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D6', FALSE, FALSE);
INSERT INTO seats VALUES (2, 'D7', FALSE, FALSE);

--------------------
-- FILMS (TABLE): --
--------------------

CREATE TABLE films (id TEXT, title TEXT, synopsis TEXT, runtime INTERVAL HOUR TO MINUTE, release DATE, rating SMALLINT, PRIMARY KEY (id));
INSERT INTO films VALUES ('aftersun', 'Aftersun', 'Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between miniDV footage as she tries to reconcile the father she knew with the man she didn''t.', '01:42:00', '2022-12-15', 12);
INSERT INTO films VALUES ('avatar-the-way-of-water', 'Avatar: The Way of Water', 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.', '03:12:00', '2022-12-14', 12);
INSERT INTO films VALUES ('babylon', 'Babylon', 'A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood''s transition from silent films and to sound films in the late 1920s.', '03:10:00', '2023-01-19', 18);
INSERT INTO films VALUES ('knock-at-the-cabin', 'Knock at the Cabin', 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.', '01:40:00', '2023-02-09', 16);
INSERT INTO films VALUES ('m3gan', 'M3GAN', 'A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll''s programming works too well, she becomes overprotective of her new friend with terrifying results.', '01:42:00', '2023-01-12', 16);
INSERT INTO films VALUES ('puss-in-boots-the-last-wish', 'Puss in Boots: The Last Wish', 'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.', '01:43:00', '2022-12-22', 6);
INSERT INTO films VALUES ('the-banshees-of-inisherin', 'The Banshees of Inisherin', 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.', '01:55:00', '2023-01-05', 14);
INSERT INTO films VALUES ('the-whale', 'The Whale', 'A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.', '01:57:00', '2023-04-27', 16);

--------------------
-- SHOWS (TABLE): --
--------------------

CREATE TABLE shows (id SERIAL, screen INTEGER REFERENCES screens(id), film TEXT REFERENCES films(id), "date" DATE, "time" TIME(0), PRIMARY KEY (id));
INSERT INTO shows VALUES (DEFAULT, 1, 'aftersun', NOW()::date, NOW()::time + '01:00:00');
INSERT INTO shows VALUES (DEFAULT, 2, 'aftersun', NOW()::date, NOW()::time + '03:00:00');
INSERT INTO shows VALUES (DEFAULT, 1, 'aftersun', NOW()::date, NOW()::time + '04:00:00');
INSERT INTO shows VALUES (DEFAULT, 2, 'aftersun', NOW()::date, NOW()::time + '06:00:00');

--------------------
-- USERS (TABLE): --
--------------------

CREATE TABLE users (username VARCHAR(63), passhash VARCHAR(63), PRIMARY KEY (username));
INSERT INTO users VALUES ('admin', 'admin');
INSERT INTO users VALUES ('user1', 'user1');
INSERT INTO users VALUES ('user2', 'user2');
INSERT INTO users VALUES ('user3', 'user3');
INSERT INTO users VALUES ('user4', 'user4');

----------------------
-- TICKETS (TABLE): --
----------------------

CREATE TABLE tickets (id SERIAL, "user" VARCHAR(63) REFERENCES users(username), show INTEGER REFERENCES shows(id), redeemed BOOLEAN, PRIMARY KEY (id));
INSERT INTO tickets VALUES (DEFAULT, 'user1', 2, FALSE);
INSERT INTO tickets VALUES (DEFAULT, 'user2', 3, FALSE);

----------------------
-- REVIEWS (TABLE): --
----------------------

CREATE TABLE reviews ("user" VARCHAR(63) REFERENCES users(username), film TEXT REFERENCES films(id), rating SMALLINT, review TEXT, CHECK (rating BETWEEN 1 AND 5), PRIMARY KEY ("user", film));
INSERT INTO reviews VALUES ('user1', 'aftersun', 5, 'Loved it! So dreamy!');
INSERT INTO reviews VALUES ('user2', 'aftersun', 4, 'Good movie, worth a watch if you like the aesthetic.');
INSERT INTO reviews VALUES ('user3', 'aftersun', 2, 'Absolut garbage, don''t bother...');
INSERT INTO reviews VALUES ('user4', 'aftersun', 3, 'It was alright, but critics are playing it too high.');
