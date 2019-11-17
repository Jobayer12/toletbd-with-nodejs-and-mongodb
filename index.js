require("dotenv").config();

const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
require("./Database/index");
const register = require("./Registration");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.end("Hello World\n");
});

app.post("/user/register", register);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
