const express = require("express");
const PORT = 3001;
const app = express();
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//they are middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`API server now listening on ${PORT}`);
});
