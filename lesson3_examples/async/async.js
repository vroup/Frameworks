// --- async function --- //
function waitForStuff(value) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(value), 2000);
    });
}

async function finishLater() {
    console.log('beginning "finishLater"');
    let result = await waitForStuff('Also three seconds...');
    console.log('ending "finishLater": ' + result);
    return "It is done!";
}
finishLater().then((val) => console.log(val));

console.log("End of script!");
