const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/**** Configuration ****/
const port = 3000;
const app = express();

let tasks = [
    {"id": 0, "text": "Bake a cake", "done": true},
    {"id": 1, "text": "Call grandmother", "done": true},
    {"id": 2, "text": "Pick up children", "done": false},
    {"id": 3, "text": "Recycle glass", "done": true},
    {"id": 4, "text": "Patch bike", "done": false},
    {"id": 5, "text": "Pour petrol", "done": true},
    {"id": 6, "text": "Take out trash", "done": false}
];

app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/**** Routes ****/
app.get('/', (req, res) => res.json({msg: 'This is GET'}));
app.get('/tasks', (req, res) => res.json(tasks));
app.get('/tasks/:id', (req, res) => res.json(tasks.find(p => p.id === parseInt(req.params.id, 10))));
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(p => p.id === parseInt(req.params.id, 10));
    const removed = tasks.splice(index, 1);

    res.json(removed);
});
app.post('/tasks', (req, res) => {
    const reducer = (a, c) => Math.max(a, c.id);
    const newIndex = tasks.reduce(reducer, 0) + 1;
    tasks.push({
       "id": newIndex,
       "text": req.body.text,
       "done": req.body.done
    });
    res.json(tasks[newIndex]);
});
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(p => p.id === parseInt(req.params.id, 10));
    task.text = req.body.text || task.text;
    task.done = req.body.done || task.done;
    res.json(task);
});

app.post('/', (req, res) => {
    for (let k in req.body) {
        console.log(k + ": " + req.body[k]);
    }
    res.json({msg: 'This is POST'})
});

/**** Start ****/
app.listen(port, () => console.log(`App running on port ${port}!`));

