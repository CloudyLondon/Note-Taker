const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// in this file
// need function to read and write the file.
// need UUID to get a unique ID
// TODO 1. make a function to read the file (can be called 'readFile')
// TODO 2. make a function to create a note (can be called 'createNote')
// TODO 3. make a function to delete the note (can be called 'deleteNote)

//using Json.parse to parse a json string
function readThisFile() {
  JSON.parse(fs.readFile(path.join(__dirname, "../../db/db.json")));
}

//using fs to pass in the note structure and then pushing the notes onto note
//i need ID in the notes so i will spread in notes then add ID with UUID
//using fs.writeFileSync to push those onto
function createNote(body, note) {
  const notes = body; //need to spread in
  //note was my obj in my array. but i want to add UUID to it, so im making it JSON obj here
  note.push({ ...notes, id: uuidv4() }); //key value pair as an object
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ note }, null, 2)
  );
  return note; //bc note is my array! note is what is in my db json.
}

//need filter
// function deleteNote(body,note) {
//   const
// }

module.exports = {
  readThisFile,
  createNote,
};
