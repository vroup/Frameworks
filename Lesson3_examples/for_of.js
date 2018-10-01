// --- for ... of --- //
let veggies = ['Carrot', 'Squash','Cucumber'];
for (let veggie of veggies) {
    console.log(veggie);
}
for (let veggie in veggies) {
    console.log(veggie);
}

veggies.forEach(v => console.log(v));