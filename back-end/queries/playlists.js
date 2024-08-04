//Require dbConfig to listen to our functions
const db = require("../db/dbConfig.js");

//Get all playlists (READ)
const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (error) {
    return error;
  }
}

//Show one playlist
//Get one song (READ)
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist
  } catch (error) {
    return error;
  }
}

//Create
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, description, image, genre, is_private) VALUES ($1, $2, $3, $4, $5) RETURNING *", [playlist.name, playlist.description, playlist.image, playlist.genre, playlist.is_private]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
}

//Delete
const deletePlaylist = async (id) => {
  try {
    const deletePlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *", id
    );
    return deletePlaylist;
  } catch (error) {
    return error;
  }
};

//Update
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one (
      "UPDATE playlists SET name=$1, description=$2, image=$3, genre=$4, is_private=$5 where id=$6 RETURNING *", [playlist.name, playlist.description, playlist.image, playlist.genre, playlist.is_private, id]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist
}