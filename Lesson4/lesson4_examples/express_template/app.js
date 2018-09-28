const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/**** Configuration ****/
const port = 8080;
const app = express();
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console

/**** Routes ****/
app.get('/', (req, res) => res.json({ msg: 'This is GET' }));
app.post('/', (req, res) => {
    for (let k in req.body) {
        console.log(k + ": " + req.body[k]);
    }
    res.json({ msg: 'This is POST' })
});

/**** Start ****/
app.listen(port, () => console.log(`App running on port ${port}!`));

