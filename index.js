require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(cors());
app.listen(process.env.PORT_ID, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
