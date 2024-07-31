//Require dbConfig to listen to our functions
const db = require("../db/dbConfig.js");

//List async functions for our CRUD

//Get all songs
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
}

//Get one song

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong
  } catch (error) {
    return error;
  }
}

//Do not forget to export functions
module.exports = {
  getAllSongs,
  getSong
}