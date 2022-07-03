// Explain what is Hoisting in Javascript 

// Hoisting is the concept in which Javascript, by default, moves all declarations to the top of the current scope. As such, a variable can be used before it has been declared.

// Note that Javascript only hoists declarations and not initializations.

// Function hoisting
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/
// Copy to Clipboard
// Without hoisting you would have to write the same code like this:

function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
/*
The result of the code above is the same: "My cat's name is Tiger"
*/

// var hoisting
// Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.