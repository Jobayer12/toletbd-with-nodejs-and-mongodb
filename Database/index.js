require("dotenv").config();
const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost:27017/toletbd",
  { useNewUrlParser: true, useUnifiedTopology: true },
  result => {}
);
