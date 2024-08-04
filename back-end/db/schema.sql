--db/schema/sql
DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  album VARCHAR(255) NOT NULL,
  time VARCHAR(255),
  is_favorite BOOLEAN,
  image VARCHAR(255)
);

DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  genre TEXT,
  is_private BOOL
);

