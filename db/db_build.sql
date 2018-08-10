BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  timeadded TIMESTAMP DEFAULT now()

);

INSERT INTO users (username, email, password) VALUES
('test_user', 'test@google.com', 'love');

COMMIT;