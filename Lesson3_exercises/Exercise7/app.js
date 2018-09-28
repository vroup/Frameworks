/***
 * Make a simple node.js server application that stores tasks for a Todo List.
 * It should return an array of tasks on http://localhost:8080/api/tasks (as JSON)
 * and status code 404 everywhere else.
 *
 * Upgrade your app from last week so it retrieves tasks from your new node.js app.
 * Instead of using jQuery.ajax() for ajax, try using the new fetch method built into modern browser.
 * Use JSON.stringify to convert your data into json. You might also need to add the following line
 * to your node.js response to prevent your browser from triggering a CORS error.
 * @type {{_connectionListener, METHODS, STATUS_CODES, Agent, ClientRequest, globalAgent, IncomingMessage, OutgoingMessage, Server, ServerResponse, createServer, get, request}|*}
 */


const http = require("http");
const fetch = require("node-fetch");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {

    console.log(req.url);

    if(req.url === "/api/tasks" || req.url === "/favicon.ico") {
        console.log("Is okay url!");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.text())
            .then(body=>res.end(body));


        // res.end('Hello World\n');
    } else {
        res.statusCode = 404;
        res.end("Not found.\n")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
