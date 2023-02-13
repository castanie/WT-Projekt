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

CREATE TABLE seats (cinema INTEGER REFERENCES cinemas(id), row SMALLINT, col SMALLINT, premium BOOLEAN, accessible BOOLEAN, PRIMARY KEY (cinema, row, col));
INSERT INTO seats VALUES (1, 1, 1, FALSE, TRUE);
INSERT INTO seats VALUES (1, 1, 2, FALSE, TRUE);
INSERT INTO seats VALUES (1, 2, 1, TRUE, FALSE);
INSERT INTO seats VALUES (1, 2, 2, TRUE, FALSE);
INSERT INTO seats VALUES (2, 1, 1, FALSE, FALSE);
INSERT INTO seats VALUES (2, 1, 2, FALSE, FALSE);
INSERT INTO seats VALUES (2, 2, 1, TRUE, FALSE);
INSERT INTO seats VALUES (2, 2, 2, TRUE, FALSE);

--------------------
-- FILMS (TABLE): --
--------------------

CREATE TABLE films (id TEXT, title TEXT, synopsis TEXT, runtime INTERVAL HOUR TO MINUTE, release DATE, rating SMALLINT, PRIMARY KEY (id));
INSERT INTO films VALUES ('aftersun', 'Aftersun', 'Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between miniDV footage as she tries to reconcile the father she knew with the man she didn''t.', '01:42:00', '2022-12-15', 12);
INSERT INTO films VALUES ('avatar-the-way-of-water', 'Avatar: The Way of Water', 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.', '03:12:00', '2022-12-14', 12);
INSERT INTO films VALUES ('babylon', 'Babylon', 'A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood''s transition from silent films and to sound films in the late 1920s.', '03:10:00', '2023-01-19', 18);
INSERT INTO films VALUES ('knock-at-the-cabin', 'Knock at the Cabin', 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.', '01:40:00', '2023-02-09', 16);
INSERT INTO films VALUES ('puss-in-boots-the-last-wish', 'Puss in Boots: The Last Wish', 'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.', '01:43:00', '2022-12-22', 6);
INSERT INTO films VALUES ('the-banshees-of-inisherin', 'The Banshees of Inisherin', 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.', '01:55:00', '2023-01-05', 14);
INSERT INTO films VALUES ('the-menu', 'The Menu', 'A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.', '01:48:00', '2022-11-17', 16);
INSERT INTO films VALUES ('the-whale', 'The Whale', 'A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.', '01:57:00', '2023-04-27', 16);
-- INSERT INTO films VALUES ('title', 'Title', 'Synopsis', '01:30:00', '2023-01-01', 0);

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