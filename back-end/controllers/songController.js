//dependencies
const express = require("express");
const songs = express.Router();

//import our query functions
const { getAllSongs, getSong, createSong, deleteSong } = require("../queries/songs.js");

//Routes
//Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if(allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({error: "server error"});
  }
});

//Show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({error: "song not found"});
  }
});

//Create
songs.post("/", async (req, res) => {
  const song = await createSong(req.body);
  res.json(song);
});

//Delete
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if(deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(400).json("Song not found")
  }
});

module.exports = songs;