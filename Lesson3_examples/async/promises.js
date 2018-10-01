// --- promises --- //
function waitForStuff(text) {
    return new Promise(function(resolve, reject) {
        console.log("waitForStuff");
        setTimeout(() => resolve(text), 2000);
    });
}
function waitSomeMore(text) {
    return new Promise(function(resolve, reject) {
        console.log("waitSomeMore");
        setTimeout(() => resolve(text), 2000);
    });
}
function andSomeMore(text) {
    return new Promise(function(resolve, reject) {
        console.log("andSomeMore");
        setTimeout(() => resolve(text), 2000);
    });
}

waitForStuff('Three seconds...')
    .then((val) => waitSomeMore(val))
    .then((val) => andSomeMore(val))
    .then((val) => console.log("Done: " + val));
