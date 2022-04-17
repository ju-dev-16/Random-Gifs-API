"use strict";

const axios = require("axios");
const cheerio = require("cheerio");

function getRandomNumber(min, max) {
    let step_1 = max - min + 1;
    let step_2 = Math.random() * step_1;

    return Math.floor(step_2) + min;
}

async function gifs(search) {
    const url = `https://tenor.com/search/${search}`;

    return (
        axios.get(url)
        .then(response => {
            let $ = cheerio.load(response.data);
            const listOfGifs = [];

            $('img').each((_index, element) => {
                listOfGifs.push($(element).attr("src"));
            });

            listOfGifs.splice(0, 2);

            return listOfGifs[getRandomNumber(0, listOfGifs.length - 1)];
        }).catch(error => {
            console.error(error);
        })
    )
}

module.exports = gifs;