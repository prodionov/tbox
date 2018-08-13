BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  timeadded TIMESTAMP DEFAULT now()

);

DROP TABLE IF EXISTS sport;

CREATE TABLE sport (
  game_id SERIAL PRIMARY KEY NOT NULL,
  game_date DATE,
  home_team VARCHAR(100) NOT NULL,
  away_team VARCHAR(100) NOT NULL,
  ftr VARCHAR(1) NOT NULL,
  winner VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email, password) VALUES
('test_user', 'test@google.com', 'love');

COPY sport FROM '/home/pavel/afterFAC/tbox/sport.csv' DELIMITER ',' CSV;

COMMIT;