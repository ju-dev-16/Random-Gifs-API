"use strict";

const http = require("http");

const express = require("express");

const logger = require("./public/javascript/logger");
const fetch = require("./public/javascript/fetch");

const app = express();
const port = 5000;

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

app.get("/gifs/:search", async(req, res) => {
    res.send(await fetch(`${req.params["search"]}`));
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});