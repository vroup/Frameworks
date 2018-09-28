const fetch = require("node-fetch");
const secret = "2c62c7492813337bc99af53ad3ac3f79";

async function getForecast(longitude, altitude, language) {
    const url = `https://api.darksky.net/forecast/${secret}/${longitude},${altitude}?units=auto&lang=${language}`;

    //let forecast = await fetch(url).then(res => res.json());
    //return forecast;
    return fetch(url).then(res => res.json());
}

module.exports = {
    getForecast: getForecast
};