// Explain Null and Undefined in JavaScript 

// JavaScript (and by extension TypeScript) has two bottom types: null and undefined. They are intended to mean different things:

// Something hasn't been initialized: undefined.

var demo;
alert(demo); //shows undefined
alert(typeof demo); //shows undefined


// Something is currently unavailable: null.

var demo = null;
alert(demo); //shows null
alert(typeof demo); //shows object