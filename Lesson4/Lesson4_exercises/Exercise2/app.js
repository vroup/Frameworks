const darkSky = require("./MyModules/DarkSky.js");
const express = require("express");
const app = express();

const port = 8080;

function getListItem(e) {
    const d = new Date(e.time * 1000);
    const t = e.temperature.toFixed(1);

    return `<li>${d.getHours()}: ${t} &deg;C</li>`;
}

function getHourlyTemp(forecast) {
    const listItems = forecast.hourly.data
        .slice(0, 11)
        .reduce((a, e) => a + getListItem(e), "");

    return `<ul>${listItems}</ul>`;
}

function getSummary(forecast) {
    return `Current weather: ${forecast.currently.summary}\n`;
}

function getHTML(req, res) {
    // Aarhus coordinates 56.1629° N, 10.2039° E
    const longitude = "56.1629";
    const altitude = "10.2039";

    const language = req.params.lang || "en";

    darkSky.getForecast(longitude, altitude, language)
        .then(body => {

            const summary = getSummary(body);
            const hourly =  getHourlyTemp(body);
            const html = `<html><head></head><body>${summary}${hourly}</body></html>`;

            res.send(html);
        });
}

app.get('/favicon.ico', (req, res) => res.status(204));
app.get("/", getHTML);
app.get("/:lang", getHTML);

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));