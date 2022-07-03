// What is equality in JavaScript ? EARLY

// JavaScript has both strict and type–converting comparisons:

// Strict comparison (e.g., ===) checks for value equality without allowing coercion
// Abstract comparison (e.g. ==) checks for value equality with coercion allowed


var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
