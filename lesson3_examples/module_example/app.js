const exampleModule = require('./example_module');

let text = exampleModule.doStuff(42);
let randomNumber = exampleModule.random();

console.log(text);
console.log("A random number", randomNumber);