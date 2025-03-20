const express = require("express");

const router = express.Router();

// TODO: Add functionality of /me endpoint for exisiting users
router.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = { router };
