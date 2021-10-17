"use strict";

const puppeteer = require("puppeteer");

async function gifs(search = "rickroll") {
    const url = `https://tenor.com/search/${search}`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x("/html/body/div/div/div[2]/div/div/div/div[3]/div[1]/figure/a/div[1]/img");
    const src = await el.getProperties("src");

    console.log(src);

    browser.close();

    return gifs
}

module.exports = gifs();