const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const loadData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello World");
});
//path
app.get("/records", (req, res) => {
  res.send(loadData);
});

app.listen(port, () => {
  console.log("port is listening in port ${port}");
});
