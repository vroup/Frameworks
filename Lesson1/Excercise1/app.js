const express = require('express');
const fetch = require('node-fetch');
const app = express();
const portNumber = 8080;

app.use(express.static('./'));

app.get('/', (req, res) =>
    res.sendFile("index.html"));

app.listen(portNumber, () => console.log(`TODO app listening on port ${portNumber}!`));

