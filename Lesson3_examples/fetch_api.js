// --- Fetch API example --- //
// --- run 'npm install' before running this script ---//

const fetch = require('node-fetch');

// GET stuff
fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => response.json()) // Turn into JSON
    .then(json => {
        console.log("Got user with name:", json.name);
    });


// POST stuff
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'My new post',
        body: 'Stuff I just wrote',
        userId: 4
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => { // Server creates new object and returns it
        console.log("New object created:", json);
    });
