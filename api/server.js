const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/personal-finance-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 


module.exports = app;
