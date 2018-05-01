// Dependencies:
var express = require("express");
var bodyParser = require("body-parser");

// Set up server:
var app = express();
var PORT = process.env.PORT || 8080;

// To handle data parsing:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routers:
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to listen at PORT:
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
