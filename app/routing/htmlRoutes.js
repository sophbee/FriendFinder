var path = require("path");
var express = require("express");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("styles/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/styles.css"));
  });

  app.use(express.static("app/public"));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
