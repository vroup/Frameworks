// --- map --- //
let personMap = new Map();
personMap.set('123456-0123', {name : 'Kristian'});
personMap.set('789123-0123', {name : 'Jens'});
console.log(personMap.values());
console.log(personMap.keys());
console.log(personMap.get('123456-0123'));

// --- set --- //
let personSet = new Set();
personSet.add("Kristian");
console.log(personSet.has("Kristian"));
console.log(personSet.has("Jens"));