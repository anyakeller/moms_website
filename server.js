//AHHH
require('dotenv').config()

// Use-y stuff
const express = require('express');

// set stuff up
const app = express();
const PORT = process.env.PORT || 3001;

// AHHHH
console.log(process.env.WHAT_SHE_SAID);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
