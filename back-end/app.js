//Dependencies
const cors = require("cors");
const express = require("express");

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Song Routes

//Routes

//Home Route
app.get("/", (req, res) => {
  res.send("Welcome to my Music App")
})

//404 Route
app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})

//Export
module.exports = app;