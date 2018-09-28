const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('Path of the request: ' + req.url);
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/*', (req, res) => res.send(`Hello ${req.url}!`));

app.listen(3000, () => console.log('Listening on port 3000!'));

