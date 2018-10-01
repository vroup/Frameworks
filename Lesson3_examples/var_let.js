// --- var vs let example --- //
"use strict";

var globalVar = "var first";
if (true) {
    var globalVar = "var second";
}
console.log(globalVar); // Oops, overwritten inside if block


let blockLocalVar = "let first";
if (true) {
    let blockLocalVar = 'let second';
}
console.log(blockLocalVar); // yay, still intact