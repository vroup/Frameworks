const text = "Here is your val: ";

function doStuff(val) {
    return text + val;
}

module.exports = {
    doStuff: doStuff,
    random: () => Math.floor(Math.random()*100).toString()
};