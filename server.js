// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Create instance of express app.
var app = express();

// Set the port of the application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


// Start server to listen for client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
