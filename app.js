"use strict";

// libraries
const http = require("http");
const express = require("express");

// express api
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/gifs/:search", (req, res) => {
    res.send(req.params);
});

// server
const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});