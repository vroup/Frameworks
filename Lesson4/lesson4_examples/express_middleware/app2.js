const express = require('express');
const app = express();

app.use('/cat.jpg', function (req, res, next) {
    res.send('You are not allowed to see my cat :(');
});

app.get('/', (req, res) => res.send('<a href="cat.jpg">Cat!</a>'));

app.listen(3000, () => console.log('Listening on port 3000!'));

