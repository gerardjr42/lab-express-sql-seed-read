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
app.get("/", (req, res) => {
  res.send("Welcome to my Music App")
})

//Export
module.exports = app;