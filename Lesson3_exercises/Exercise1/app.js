const http = require("http");
const fetch = require("node-fetch");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {

    console.log(req.url);

    if(req.url === "/" || req.url === "/favicon.ico") {
        console.log("Is okay url!");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

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
