//AHHH
require('dotenv').config()

// Use-y stuff
const express = require('express');

// set stuff up
const app = express();
const PORT = process.env.PORT || 3001;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Test dotenv
// console.log(process.env.WHAT_SHE_SAID);

// Test GET to /
app.get('/', (req, res) => {
  res.send('did you get this?');
});

// Start the API server
const SERVER = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = SERVER;