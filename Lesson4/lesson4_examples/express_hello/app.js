const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/secret', (req, res) => res.send('You found the hidden secret'));
app.get('/name/:name', (req, res) => res.send(`Hello, ${req.params.name}`));
app.get('/json/:name', (req, res) => res.json({ message: `Hello, ${req.params.name}`}))
app.get('*', (req, res) => res.send('What are you doing here?'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

