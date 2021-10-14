"use strict";

// libraries
const http = require("http");
const express = require("express");

// express api
const app = express();

app.use(express.static(__dirname + "/public"));

// home
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

// docs
app.get("/docs", (req, res) => {
    res.sendFile(__dirname + "/templates/docs.html");
});

// about
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/templates/about.html");
});

// request
app.get("/gifs/:search", (req, res) => {
    res.send(req.params);
});

// server
const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});