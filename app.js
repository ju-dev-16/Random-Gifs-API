"use strict";

const http = require("http");

const express = require("express");

const logger = require("./public/javascript/logger")

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(logger({
    level: "info"
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/docs", (req, res) => {
    res.sendFile(__dirname + "/templates/docs.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/templates/about.html");
});

app.get("/gifs/:search", (req, res) => {
    res.send("");
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});