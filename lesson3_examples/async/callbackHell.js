// --- callbacks --- //
function waitForStuff(callback) {
    setTimeout(callback, 2000);
}

function cbHell3() {
    console.log("last callback");
}

function cbHell2() {
    console.log("another callback");
    waitForStuff(cbHell3);
}

function cbHell1() {
    console.log("another callback");
    waitForStuff(cbHell2)
}

function callbackHell() {
    console.log("callbackHell");
    waitForStuff(cbHell1)
}

callbackHell();
