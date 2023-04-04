const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");
const express = require("express");
const EventEmitter = require("events");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("who runs the world");
});

server.listen(5000, () => {
  console.log("we're up and running on the said port");
});
