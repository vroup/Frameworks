const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send('<a href="cat.jpg">See my cat!</a>'));

app.listen(3000, () => console.log('Cat app listening on port 3000!'));

