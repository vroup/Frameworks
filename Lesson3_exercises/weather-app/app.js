const http = require("http");
const darkSky = require("./MyModules/DarkSky.js");

const hostname = "127.0.0.1";
const port = 8080;

let html = "";

function getListItem(e) {
    const d = new Date(e.time * 1000);
    const t = e.temperature.toFixed(1);

    return `<li>${d.getHours()}: ${t} &deg;C</li>`;
}

function gettHourlyTemp(forecast) {
    const listItems = forecast.hourly.data
        .slice(0, 11)
        .reduce((a, e) => a + getListItem(e), "");

    return `<ul>${listItems}</ul>`;
}

function getSummary(forecast) {
    return `Current weather: ${forecast.currently.summary}\n`;
}

const server = http.createServer((req, res) => {

    html = "";
    // Aarhus coordinates 56.1629° N, 10.2039° E
    const longitude = "56.1629";
    const altitude = "10.2039";

    res.writeHead(200, { 'Content-Type': 'text/html' });

    darkSky.getForecast(longitude,altitude)
        .then(body => {
            const summary = getSummary(body);
            const hourly =  gettHourlyTemp(body);
            const html = `<html><head></head><body>${summary}${hourly}</body></html>`;
            res.end(html);
        });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
