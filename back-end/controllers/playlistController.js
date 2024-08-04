//dependencies
const express = require("express");
const playlists = express.Router();


//import our query functions
const { getAllPlaylists, getPlaylist, createPlaylist, deletePlaylist, updatePlaylist  } = require("../queries/playlists.js");

//Routes

//Index
playlists.get("/", async (req, res) => {
  const allPlaylists = await getAllPlaylists();
  if(allPlaylists[0]) {
    res.status(200).json(allPlaylists);
  } else {
    res.status(500).status({error: "server error"})
  }
})

//Show
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (playlist) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({error: "song not found"});
  }
});

//Create
playlists.post("/", async (req, res) => {
  const playlist = await createPlaylist(req.body);
  res.json(playlist);
});

//Delete
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  if(deletedPlaylist.id) {
    res.status(200).json(deletedPlaylist);
  } else {
    res.status(400).json("Song not found")
  }
});

//Update
playlists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPlaylist = await updatePlaylist(id, req.body);
  res.status(200).json(updatedPlaylist);
});


module.exports = playlists;