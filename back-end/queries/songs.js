//Require dbConfig to listen to our functions
const db = require("../db/dbConfig.js");

//List async functions for our CRUD

//Get all songs
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongsl
  } catch (error) {
    return error;
  }
}