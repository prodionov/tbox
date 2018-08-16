BEGIN;

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS sport;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  timeadded TIMESTAMP DEFAULT now()

);



CREATE TABLE sport (
  game_id SERIAL PRIMARY KEY NOT NULL,
  game_date DATE,
  home_team VARCHAR(100) NOT NULL,
  away_team VARCHAR(100) NOT NULL,
  ftr VARCHAR(1) NOT NULL,
  winner VARCHAR(100) NOT NULL
);



CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  task_id INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(user_id),
  task VARCHAR(100) NOT NULL,
  completed VARCHAR(5) NOT NULL
);

INSERT INTO users (username, email, password) VALUES
('test_user', 'test@google.com', 'love');

INSERT INTO tasks (task_id, user_id, task, completed) VALUES ('1', '1', 'buy food', 'false');
-- COPY sport FROM '/home/pavel/afterFAC/tbox/sport.csv' DELIMITER ',' CSV;

COMMIT;