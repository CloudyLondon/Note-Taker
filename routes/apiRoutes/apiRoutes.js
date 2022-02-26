const path = require("path");
const router = require("express").Router();
const data = require("../../db/db.json");
const { readThisFile, createNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  const { notes } = readThisFile();
  console.log(notes, "hello");
  const results = notes;
  res.json(results);
  console.log(results, "nihao");
});

router.post("/notes", (req, res) => {
  const { notes } = readFile();
  console.log(notes, "wasabi");
  const newNote = createNote(req.body, notes);
  console.log(newNote, "what?");
  res.json(newNote);
});

// router.delete("/notes", (req, res) => {});

module.exports = router;
