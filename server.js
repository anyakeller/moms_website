// Use-y stuff
const express = require("express");
const routes = require("./routes");

//AHHH
require("dotenv").config();

// set stuff up
const app = express();
const PORT = process.env.PORT || 3001;

// I still don't understand this middleware stuff
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Test dotenv
// console.log(process.env.WHAT_SHE_SAID);

// Route stuff
// Use main routes
app.use(routes);

// Start the API server
const SERVER = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = SERVER;
