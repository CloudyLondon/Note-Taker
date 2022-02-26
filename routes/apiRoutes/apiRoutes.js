const path = require("path");
const router = require("express").Router();
const data = require("../../db/db.json");
const { readFile, createNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  const { notes } = readFile();
  const results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  const { notes } = readFile(); //
  const newNote = createNote(body, notes);
  res.json(newNote);
});

// router.delete("/notes", (req, res) => {});

module.exports = router;
