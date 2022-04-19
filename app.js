"use strict";

const express = require("express");

const logger = require("./public/javascript/logger");
const fetch = require("./public/javascript/fetch");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.use(logger({
    level: "info"
}));

app.get("/", (_req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/docs", (_req, res) => {
    res.sendFile(__dirname + "/templates/docs.html");
});

app.get("/about", (_req, res) => {
    res.sendFile(__dirname + "/templates/about.html");
});

app.get("/gifs/:search", async(req, res) => {
    res.send(await fetch(`${req.params["search"]}`));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});