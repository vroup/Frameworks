const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/**** Configuration ****/
const port = 8080;
const app = express();
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console

// Additional headers for the response to avoid trigger CORS security
// errors in the browser
// Read more: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next();
});

/**** Mock data ****/
let highscores = [
    {score: 100000, name: "Kristian"},
    {score: 90000, name: "Kristian"},
    {score: 80000, name: "Kristian"},
    {score: 70000, name: "Kristian"},
    {score: 60000, name: "Kristian"},
    {score: 50000, name: "Kristian"}
];

/**** Routes ****/
app.get('/', (req, res) => res.json(highscores));

app.post('/', (req, res) => {
    let score = req.body.score;
    let name = req.body.name;
    let newHs = {
      score: score,
      name: name
    };
    highscores.push(newHs);
    highscores.sort((a,b) => b.score - a.score);
    res.json(newHs);
});

app.delete('/:index', (req, res) => {
    highscores.splice(req.params.index, 1);
    res.json({msg: "Score object deleted"});
});

/**** Start ****/
app.listen(port, () => console.log(`Highscore Service running on port ${port}!`));

