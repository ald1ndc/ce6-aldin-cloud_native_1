const express = require("express");
const app = express();

app.get('/', function (req, res) {
  res.send("Hello World AldinDC");
});

app.post('/', function (req, res) {
  res.send("Hi AldinDC");
});

app.listen(3000);
