"use strict";

const http = require("http");
const path = require('path');

const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname + '/public/static/css')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/templates/index.html");
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is listening on localhost:3000...");
});