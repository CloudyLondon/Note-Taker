const express = require("express");
const PORT = 3001;
const app = express();
const path = require("path");

//saving api routes and html routes in variables
const apiRoutes = require("./routes/apiRoutes/notesRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

//they are middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//i need to use api routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now listening on ${PORT}`);
});
