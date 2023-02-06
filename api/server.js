require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

try {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  console.error(err);
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

module.exports = app;
