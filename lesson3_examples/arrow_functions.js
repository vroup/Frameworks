// --- Arrow function examples --- //

// Using an arrow function in a mapping
let fruits = ['Banana', 'Apple', 'Pineapple'];
let func = (elm) => "I like " + elm;
console.log(fruits.map(func));

// Returning an arrow function to be used
let myFunc = function(val) {
    // Notice how everything after the arrow is returned
    return (v) => "Result is: " + (val + v);
};
console.log(myFunc(100)(42)); // Printing the return value

// Arrow function is called after five seconds
function afterSomeTime() {
    this.text = "Two seconds have passed..";
    let func = () => {
        // Notice how here 'this' captures the outer this
        console.log(this.text);
    };
    setTimeout(func, 2000);
}
afterSomeTime();
