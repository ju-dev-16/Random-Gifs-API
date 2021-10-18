"use strict";

const puppeteer = require("puppeteer");

function getRandomNumber(min, max) {
    let step_1 = max - min + 1;
    let step_2 = Math.random() * step_1;
    let result = Math.floor(step_2) + min;

    return result
}

async function gifs(search = "rickroll") {
    const url = `https://tenor.com/search/${search}`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const listOfGifs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img")).map((gifs) => gifs.src);
    });

    listOfGifs.splice(0, 3);

    const result = getRandomNumber(0, listOfGifs.length - 1);

    browser.close();

    return listOfGifs[result];
}

module.exports = gifs();