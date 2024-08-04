//Require dbConfig to listen to our functions
const db = require("../db/dbConfig.js");

//List async functions for our CRUD

//Get all songs (READ)
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
}

//Get one song (READ)
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong
  } catch (error) {
    return error;
  }
}

//Create
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite, song.image]
    );
    return newSong;
  } catch (error) {
    return error;
  }
}

//Delete
const deleteSong = async (id) => {
  try {
    const deleteSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *", id
    );
    return deleteSong;
  } catch (error) {
    return error;
  }
};

//Update
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one (
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5, image=$6 where id=$7 RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite, song.image, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

//Do not forget to export functions
module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
}