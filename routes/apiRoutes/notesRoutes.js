const path = require("path");
const fs = require("fs");
const router = require("express").Router();
const { readThisFile, createNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  const { note } = readThisFile();
  const results = note;
  res.json(results);
});

router.post("/notes", (req, res) => {
  const { note } = readThisFile();
  const newNote = createNote(req.body, note);
  res.json(newNote);
});

// router.delete("/notes", (req, res) => {});

module.exports = router;
